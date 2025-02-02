const orderRepository = require("../repositories/orderRepository");

exports.createOrder = async ({ orderId, firstName, lastName, email, address, items }) => {
  const order = {
    customer: { firstName, lastName, email, address },
    items,
    timestamp: new Date(),
  };
  return await orderRepository.saveOrder(orderId, order);
};

exports.getOrdersByEmail = async (email) => {
  return await orderRepository.findOrdersByEmail(email);
};
