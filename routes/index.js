var express = require("express");
var router = express.Router();

router.use("/job", require("./jobs"));

module.exports = router;
