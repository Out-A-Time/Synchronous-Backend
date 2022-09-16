require("dotenv").config();
const envAuth = process.env.SECRET_API_KEY_TAAPI;

// Require taapi: npm i taapi --save
const taapi = require("taapi");

// Setup client with authentication
const client = taapi.client(envAuth);

//GET BTC price and data for 15minutes and 5 minutes
let getDataBTC_15min_5min = function (getDataBTC_15min_5min_handler) {
  // // Init bulk queries. This resets all previously added queries
  client.initBulkQueries();
  // Get the BTC/USDT on Binance
  //Candle Current Price / 1m
  client.addBulkQuery("candle", "binance", "BTC/USDT", "1m");
  // MA and EMA / 15minutes
  client.addBulkQuery("ma", "binance", "BTC/USDT", "15m", {
    optInTimePeriod: 200,
  });
  client.addBulkQuery("ma", "binance", "BTC/USDT", "15m", {
    optInTimePeriod: 100,
  });
  client.addBulkQuery("ma", "binance", "BTC/USDT", "15m", {
    optInTimePeriod: 50,
  });
  client.addBulkQuery("ma", "binance", "BTC/USDT", "15m", {
    optInTimePeriod: 5,
  });
  client.addBulkQuery("ema", "binance", "BTC/USDT", "15m", {
    optInTimePeriod: 21,
  });
  //RSI / 15minutes
  client.addBulkQuery("rsi", "binance", "BTC/USDT", "15m");
  //MACD / 15minutes
  client.addBulkQuery("macd", "binance", "BTC/USDT", "15m");
  //Bollinger Bands / 15minutes
  client.addBulkQuery("bbands2", "binance", "BTC/USDT", "15m");
  //Stochastic / 15minutes
  client.addBulkQuery("stoch", "binance", "BTC/USDT", "15m", {
    kPeriod: 14,
    dPeriod: 3,
    kSmooth: 3,
  });
  // MA and EMA / 5 minutes
  client.addBulkQuery("ma", "binance", "BTC/USDT", "5m", {
    optInTimePeriod: 200,
  });
  client.addBulkQuery("ma", "binance", "BTC/USDT", "5m", {
    optInTimePeriod: 100,
  });
  client.addBulkQuery("ma", "binance", "BTC/USDT", "5m", {
    optInTimePeriod: 50,
  });
  client.addBulkQuery("ma", "binance", "BTC/USDT", "5m", {
    optInTimePeriod: 5,
  });
  client.addBulkQuery("ema", "binance", "BTC/USDT", "5m", {
    optInTimePeriod: 21,
  });
  //RSI / 5 minutes
  client.addBulkQuery("rsi", "binance", "BTC/USDT", "5m");
  //MACD / 5 minutes
  client.addBulkQuery("macd", "binance", "BTC/USDT", "5m");
  //Bollinger Bands / 5 minutes
  client.addBulkQuery("bbands2", "binance", "BTC/USDT", "5m");
  //Stochastic / 5 minutes
  client.addBulkQuery("stoch", "binance", "BTC/USDT", "5m", {
    kPeriod: 14,
    dPeriod: 3,
    kSmooth: 3,
  });

  client
    .executeBulkQueries()
    .then((result) => {
      getDataBTC_15min_5min_handler(result);
      // console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { getDataBTC_15min_5min };
