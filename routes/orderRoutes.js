const express = require("express");
const orderController = require("../controllers/orderController");
const { orderValidation } = require('../validators/orderValidator');
const router = express.Router();

router.post("/", orderValidation, orderController.createOrder);
router.get("/:email", orderController.getOrdersByEmail);

module.exports = router;
