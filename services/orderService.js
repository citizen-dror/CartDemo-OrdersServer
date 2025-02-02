const orderRepository = require("../repositories/orderRepository");

exports.createOrder = async ({ orderId, firstName, lastName, email, address, items, version }) => {
  // Calculate total price for the order
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const order = {
    customer: { firstName, lastName, email, address },
    items,
    totalPrice,
    version,   
    timestamp: new Date(),
  };
  return await orderRepository.saveOrder(orderId, order);
};

exports.getOrdersByEmail = async (email) => {
  return await orderRepository.findOrdersByEmail(email);
};
