var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const { success, msg } = req.query;
  const dataToSend = {
    data: "",
    error: "",
  };
  if (success == 1) dataToSend.data = msg;
  if (success == 0) dataToSend.error = msg;
  res.render("index", dataToSend);
});

module.exports = router;
