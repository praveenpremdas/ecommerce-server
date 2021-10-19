const router = require('express').Router();
const { addProduct, uploadImage } = require('../controller/addProduct');
const { updateProduct } = require('../controller/updateProduct');
const search = require('../controller/search');

router.post('/addProduct', uploadImage, addProduct); //store imagee in server and addProduct in db
router.post('/productUpdation', uploadImage, updateProduct);
router.post('/search', search);

module.exports = router;
