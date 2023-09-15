const express = require('express');
const productController = require('../controllers/product-controller');
const router = express.Router();
const ValidateAdmin = require('../middleware/ValidateAdmin')

router.post('/', productController.comprarProducto, ValidateAdmin.njwtAuth);


module.exports = router; 