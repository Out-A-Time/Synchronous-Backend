require("dotenv").config();
const envAuth = process.env.SECRET_API_KEY_TAAPI;
const { delay } = require("lodash");
// Require taapi: npm i taapi --save
const taapi = require("taapi");
const { setTimeout } = require("timers/promises");

// Setup client with authentication
const client = taapi.client(envAuth);

// Get the BTC/USDT RSI value on the 1 minute time frame from binance
// client
//   .getIndicator("rsi", "binance", "BTC/USDT", "1m")
//   .then(function (result) {
//     console.log("Binance BTC/USDT RSI 1m: ", result);
//   })
//   .catch(function (error) {
//     console.log(error.message);
//   });

//FETCH RSI
// fetch(
//   `https://api.taapi.io/ma?secret=${envAuth}&exchange=binance&symbol=BTC/USDT&interval=1d&backtracks=3`
// ).then(function (result) {
//   result.json().then(function (data) {
//     console.log(data);
//   });
// });

//FETCH BTC PRICE every 20 seconds
// let getDataTimeInterval = setInterval(() => {
//   fetch(
//     `https://api.taapi.io/candle?secret=${envAuth}&exchange=binance&symbol=BTC/USDT&interval=1m&backtracks=1`
//   ).then(function (result) {
//     result.json().then(function (data) {
//       console.log(data);
//     });
//   });
// }, 20000);

// getDataTimeInterval;

// //Clear Time Interv🇦l
// setTimeout(() => {
//   console.log("About to cancel");
//   clearTimeout(getDataTimeInterval);
// }, 35000);

// // Init bulk queries. This resets all previously added queries
client.initBulkQueries();
// Get the BTC/USDT on Binance
//Candle Current Price / 1m
client.addBulkQuery("candle", "binance", "BTC/USDT", "1m");
// MA and EMA / 1W
client.addBulkQuery("ma", "binance", "BTC/USDT", "1w", {
  optInTimePeriod: 200,
});
client.addBulkQuery("ma", "binance", "BTC/USDT", "1w", {
  optInTimePeriod: 100,
});
client.addBulkQuery("ma", "binance", "BTC/USDT", "1w", {
  optInTimePeriod: 50,
});
client.addBulkQuery("ma", "binance", "BTC/USDT", "1w", {
  optInTimePeriod: 5,
});
client.addBulkQuery("ema", "binance", "BTC/USDT", "1w", {
  optInTimePeriod: 21,
});
//RSI / 1W
client.addBulkQuery("rsi", "binance", "BTC/USDT", "1w");
//MACD / 1W
client.addBulkQuery("macd", "binance", "BTC/USDT", "1w");
//Bollinger Bands / 1W
client.addBulkQuery("bbands2", "binance", "BTC/USDT", "1w");
//Stochastic / 1W
client.addBulkQuery("stoch", "binance", "BTC/USDT", "1w", {
  kPeriod: 14,
  dPeriod: 3,
  kSmooth: 3,
});
// MA and EMA / 1D
client.addBulkQuery("ma", "binance", "BTC/USDT", "1d", {
  optInTimePeriod: 200,
});
client.addBulkQuery("ma", "binance", "BTC/USDT", "1d", {
  optInTimePeriod: 100,
});
client.addBulkQuery("ma", "binance", "BTC/USDT", "1d", {
  optInTimePeriod: 50,
});
client.addBulkQuery("ma", "binance", "BTC/USDT", "1d", {
  optInTimePeriod: 5,
});
client.addBulkQuery("ema", "binance", "BTC/USDT", "1d", {
  optInTimePeriod: 21,
});
//RSI / 1D
client.addBulkQuery("rsi", "binance", "BTC/USDT", "1d");
//MACD / 1D
client.addBulkQuery("macd", "binance", "BTC/USDT", "1d");
//Bollinger Bands / 1D
client.addBulkQuery("bbands2", "binance", "BTC/USDT", "1d");
//Stochastic / 1D
client.addBulkQuery("stoch", "binance", "BTC/USDT", "1d", {
  kPeriod: 14,
  dPeriod: 3,
  kSmooth: 3,
});

client
  .executeBulkQueries()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
