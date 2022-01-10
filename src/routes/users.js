var express = require("express");
var router = express.Router();
const { client } = require("../services/db");
const { createHash } = require("../helpers/encryptDecrypt");
const { validCreditCard } = require("../helpers/LuhnCheck");

/* GET all card listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.post("/", async function (req, res, next) {
  let { cardNumber, name, cvv, month, year } = req.body;
  if (!cardNumber && !name && !month && !cvv && !year)
    return res.redirect("/?success=0&msg=Invalid params");

  // return res.render("index", { data: " ", error: "Invalid Params" });

  if (!validCreditCard(cardNumber))
    return res.redirect("/?success=0&msg=Invalid card number");

  cardNumber = createHash(cardNumber);
  cvv = createHash(cvv);
  const saveInfo = await client.query(
    "INSERT INTO card_info (card_number, name,cvv,exp_month,exp_year) VALUES ($1, $2 ,$3 , $4 , $5 ) RETURNING *;",
    [cardNumber, name, cvv, month, year]
  );

  return res.redirect("/?success=1&msg=Data added successfully");
});
module.exports = router;
