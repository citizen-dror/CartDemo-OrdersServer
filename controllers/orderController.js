const { v4: uuidv4 } = require("uuid"); 
const { body, validationResult } = require('express-validator');
const orderService = require("../services/orderService");

// Validation rules
const orderValidation = [
  body('firstName').isLength({ min: 2 }).withMessage('First name should be at least 2 characters'),
  body('lastName').isLength({ min: 2 }).withMessage('Last name should be at least 2 characters'),
  body('email').isEmail().withMessage('Invalid email format'),
  body('address').notEmpty().withMessage('Address is required'),
  body('items').isArray().withMessage('Items should be an array').notEmpty().withMessage('Items cannot be empty'),
  body('version').isInt().withMessage('Version must be an integer'),
];

exports.createOrder = async (req, res) => {
  // Validate the request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { firstName, lastName, email, address, items, version } = req.body;

    // Generate a unique order ID
    const orderId = uuidv4();

    // Call the service to create the order
    const result = await orderService.createOrder({ orderId, firstName, lastName, email, address, items, version });

    // Respond with the result
    res.status(201).json({ message: "Order inserted", result });
  } catch (error) {
    console.error("Error inserting order:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getOrdersByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await orderService.getOrdersByEmail(email);
    res.status(200).json({ orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
