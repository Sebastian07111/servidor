const express = require('express');
const productController = require('../controllers/product-controller');
const router = express.Router()
router.post('/', productController.updateAProduct);


module.exports = router; 