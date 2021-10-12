const router = require("express").Router();
const home = require("./Home");
const admin = require("./admin");

router.use("/home", home);
router.use("/admin", admin);

module.exports = router;
