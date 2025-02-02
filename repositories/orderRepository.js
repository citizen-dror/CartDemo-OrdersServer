const { getOpenSearchClient } = require("../loaders/opensearchLoader");
const config = require("../config");

exports.saveOrder = async (orderId, orderData) => {
  const client = getOpenSearchClient();
  return await client.index({
    index: config.INDEX_NAME,
    id: orderId,
    body: orderData,
  });
};

exports.findOrdersByEmail = async (email) => {
  const client = getOpenSearchClient();
  const response = await client.search({
    index: config.INDEX_NAME,
    body: {
      query: {
        match_phrase: { "customer.email": email },
      },
    },
  });

  return response.body.hits.hits.map(hit => hit._source);
};
