const express = require("express");
const orderRoutes = require("../routes/orderRoutes");
const { initOpenSearch } = require("./opensearchLoader");
const corsLoader = require('./corsLoader');

module.exports = (app) => {
    initOpenSearch(); // Initialize OpenSearch
    corsLoader(app); 
    app.use("/orders", orderRoutes);
};