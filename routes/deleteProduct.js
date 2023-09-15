const express = require('express');
const productController = require('../controllers/product-controller');
const router = express.Router();
const ValidateAdmin = require('../middleware/ValidateAdmin')

router.delete('/', productController.deleteAProduct, ValidateAdmin.njwtAuth);


module.exports = router; 