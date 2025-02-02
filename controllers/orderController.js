const orderService = require("../services/orderService");

exports.createOrder = async (req, res) => {
  try {
    const { orderId, firstName, lastName, email, address, items } = req.body;

    if (!orderId || !firstName || !lastName || !email || !address || !items) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const result = await orderService.createOrder({ orderId, firstName, lastName, email, address, items });
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
