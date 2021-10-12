const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("sucess");
});

module.exports = router;
