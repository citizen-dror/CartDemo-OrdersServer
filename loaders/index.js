const express = require("express");
const orderRoutes = require("../routes/orderRoutes");
const { initOpenSearch } = require("./opensearchLoader");

module.exports = (app) => {
    initOpenSearch(); // Initialize OpenSearch
    app.use("/orders", orderRoutes);
};