const express = require("express");
const coinsRouter = express.Router();

// let { resultBTC_1W_1D } = require("../api/getAllData");

// console.log("HERE: ", resultBTC_1W_1D);

//testing middleware
coinsRouter.use(function (req, res, next) {
  console.log("Testing middleware: ", req.url, "@", Date.now());
  next();
});

//Route for BTC_USDT
coinsRouter.route("/BTC_USDT").get(function (req, res) {
  res.send(`
<h1>BTC-USDT 1W_1D:</h1>
    <h2>BTC-USDT Current Price: $${resultBTC_1W_1D[0].result.close}</h2>
    <h2>MA200_1W: ${resultBTC_1W_1D[1].result.value}</h2>
    <h2>MA100_1W: ${resultBTC_1W_1D[2].result.value}</h2>
    <h2>MA50_1W: ${resultBTC_1W_1D[3].result.value}</h2>
    <h2>MA5_1W: ${resultBTC_1W_1D[4].result.value}</h2>
    <h2>EMA21_1W: ${resultBTC_1W_1D[5].result.value}</h2>
    <h2>RSI_1W: ${resultBTC_1W_1D[6].result.value}</h2>
    <h2>MACD_1W: ${resultBTC_1W_1D[7].result}</h2>
    <h2>Bollinger Bands_1W: </h2>
          <h2>ValueUpperBand: ${resultBTC_1W_1D[8].result.valueUpperBand}</h2>
          <h2>ValueMiddleBand: ${resultBTC_1W_1D[8].result.valueMiddleBand}</h2>
          <h2>ValueLowerBand: ${resultBTC_1W_1D[8].result.valueLowerBand}</h2>
    <h2>Stochastic_1W: </h2>
          <h2>ValueK: ${resultBTC_1W_1D[9].result.valueK}</h2>
          <h2>ValueD: ${resultBTC_1W_1D[9].result.valueD}</h2>
<h1>BTC-USDT 12h_8h:</h1>
    <h2>MA200_12h_8h: ${resultBTC_12h_8h[1].result.value}</h2>
    <h2>MA100_12h_8h: ${resultBTC_12h_8h[2].result.value}</h2> 
    `);
});

//Route for XMR_USDT
coinsRouter.route("/XMR_USDT").get(function (req, res) {
  res.send(`<h1>XMR-USDT:</h1>
      <h2>ADD THIS ROUTE LATER</h2>
      `);
});

//Route for ETH_USDT
coinsRouter.route("/ETH_USDT").get(function (req, res) {
  res.send(`<h1>ETH-USDT:</h1>
        <h2>ADD THIS ROUTE LATER</h2>
        `);
});

module.exports = coinsRouter;
