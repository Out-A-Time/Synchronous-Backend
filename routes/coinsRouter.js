const express = require("express");
const loadContentBTC = require("../views/loadContentBTC");
const coinsRouter = express.Router();

//testing middleware
coinsRouter.use(function (req, res, next) {
  console.log("Testing middleware: ", req.url, "@", Date.now());
  next();
});

//Route for BTC_USDT
coinsRouter.route("/BTC_USDT").get(function (req, res) {
  res.send(loadContentBTC({ req }));
});

//Route for ETH_USDT
coinsRouter.route("/ETH_USDT").get(function (req, res) {
  res.send(`<h1>ETH-USDT:</h1>
        <h2>ADD THIS ROUTE LATER</h2>
        `);
});

//Route for XMR_USDT
coinsRouter.route("/XMR_USDT").get(function (req, res) {
  res.send(`<h1>XMR-USDT:</h1>
      <h2>ADD THIS ROUTE LATER</h2>
      `);
});

module.exports = coinsRouter;
