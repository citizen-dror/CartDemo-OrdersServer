// validators/orderValidator.js
const { body } = require('express-validator');

exports.orderValidation = [
  body('firstName').isLength({ min: 2 }).withMessage('First name should be at least 2 characters'),
  body('lastName').isLength({ min: 2 }).withMessage('Last name should be at least 2 characters'),
  body('email').isEmail().withMessage('Invalid email format'),
  body('address').notEmpty().withMessage('Address is required'),
  body('items').isArray().withMessage('Items should be an array').notEmpty().withMessage('Items cannot be empty'),
  body('version').isInt().withMessage('Version must be an integer'),
];
