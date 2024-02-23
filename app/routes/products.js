let express = require('express');
let router = express.Router();

let productController = require("../controllers/products");

/* GET users listing. */
router.get('/', productController.create);
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.addProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);
router.get('/products', productController.getProductsContainingKW);

module.exports = router;
