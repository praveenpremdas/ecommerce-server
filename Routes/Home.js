const router = require("express").Router();
const viewAllProducts = require("../controller/viewAllProduct");

router.get("/", viewAllProducts);

module.exports = router;
