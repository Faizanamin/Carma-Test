const { Client } = require("pg");
const client = new Client({
  user: "lsdwmfnr",
  host: "drona.db.elephantsql.com",
  database: "lsdwmfnr",
  password: "FvrEhRUp0WE8BIUy6YCvdd1Lsd4oxQRt",
  port: 5432,
});

client.connect();


module.exports = {
  client,
};
