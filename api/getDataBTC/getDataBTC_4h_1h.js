require("dotenv").config();
const envAuth = process.env.SECRET_API_KEY_TAAPI;

// Require taapi: npm i taapi --save
const taapi = require("taapi");

// Setup client with authentication
const client = taapi.client(envAuth);

//GET BTC price and data for 4h and 1h
let getDataBTC_4h_1h = function (getDataBTC_4h_1h_handler) {
  // // Init bulk queries. This resets all previously added queries
  client.initBulkQueries();
  // Get the BTC/USDT on Binance
  //Candle Current Price / 1m
  client.addBulkQuery("candle", "binance", "BTC/USDT", "1m");
  // MA and EMA / 4h
  client.addBulkQuery("ma", "binance", "BTC/USDT", "4h", {
    optInTimePeriod: 200,
  });
  client.addBulkQuery("ma", "binance", "BTC/USDT", "4h", {
    optInTimePeriod: 100,
  });
  client.addBulkQuery("ma", "binance", "BTC/USDT", "4h", {
    optInTimePeriod: 50,
  });
  client.addBulkQuery("ma", "binance", "BTC/USDT", "4h", {
    optInTimePeriod: 5,
  });
  client.addBulkQuery("ema", "binance", "BTC/USDT", "4h", {
    optInTimePeriod: 21,
  });
  //RSI / 4h
  client.addBulkQuery("rsi", "binance", "BTC/USDT", "4h");
  //MACD / 4h
  client.addBulkQuery("macd", "binance", "BTC/USDT", "4h");
  //Bollinger Bands / 4h
  client.addBulkQuery("bbands2", "binance", "BTC/USDT", "4h");
  //Stochastic / 4h
  client.addBulkQuery("stoch", "binance", "BTC/USDT", "4h", {
    kPeriod: 14,
    dPeriod: 3,
    kSmooth: 3,
  });
  // MA and EMA / 1h
  client.addBulkQuery("ma", "binance", "BTC/USDT", "1h", {
    optInTimePeriod: 200,
  });
  client.addBulkQuery("ma", "binance", "BTC/USDT", "1h", {
    optInTimePeriod: 100,
  });
  client.addBulkQuery("ma", "binance", "BTC/USDT", "1h", {
    optInTimePeriod: 50,
  });
  client.addBulkQuery("ma", "binance", "BTC/USDT", "1h", {
    optInTimePeriod: 5,
  });
  client.addBulkQuery("ema", "binance", "BTC/USDT", "1h", {
    optInTimePeriod: 21,
  });
  //RSI / 1h
  client.addBulkQuery("rsi", "binance", "BTC/USDT", "1h");
  //MACD / 1h
  client.addBulkQuery("macd", "binance", "BTC/USDT", "1h");
  //Bollinger Bands / 1h
  client.addBulkQuery("bbands2", "binance", "BTC/USDT", "1h");
  //Stochastic / 1h
  client.addBulkQuery("stoch", "binance", "BTC/USDT", "1h", {
    kPeriod: 14,
    dPeriod: 3,
    kSmooth: 3,
  });

  client
    .executeBulkQueries()
    .then((result) => {
      getDataBTC_4h_1h_handler(result);
      // console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { getDataBTC_4h_1h };
