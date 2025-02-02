module.exports = {
    OPENSEARCH_HOST: process.env.OPENSEARCH_HOST || "https://your-opensearch-domain",
    OPENSEARCH_USER: process.env.OPENSEARCH_USER || "admin",
    OPENSEARCH_PASS: process.env.OPENSEARCH_PASS || "admin",
    INDEX_NAME: "orders",
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:5173'],  // Default to localhost for development
  };
  