const { Client } = require("@opensearch-project/opensearch");
const config = require("../config");

let client = null;

const initOpenSearch = () => {
  client = new Client({
    node: config.OPENSEARCH_HOST,
    auth: {
      username: config.OPENSEARCH_USER,
      password: config.OPENSEARCH_PASS,
    },
  });
  console.log("OpenSearch connected.");
};

const getOpenSearchClient = () => {
  if (!client) throw new Error("OpenSearch client is not initialized");
  return client;
};

module.exports = { initOpenSearch, getOpenSearchClient };
