const router = require("express").Router();
const { addProduct, uploadImage } = require("../controller/addProduct");

router.post("/addProduct", uploadImage, addProduct); //store imagee in server and addProduct in db

module.exports = router;
