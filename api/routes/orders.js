const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orders.controller');

router.get('/', orderController.getAllOrders);

router.post('/', orderController.createOrder);

router.get('/:orderId', orderController.getOrderById);

router.delete('/:orderId',orderController.deleteOrder);

module.exports = router;