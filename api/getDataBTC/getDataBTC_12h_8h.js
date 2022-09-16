require("dotenv").config();
const envAuth = process.env.SECRET_API_KEY_TAAPI;

// Require taapi: npm i taapi --save
const taapi = require("taapi");

// Setup client with authentication
const client = taapi.client(envAuth);

//GET BTC price and data for 12h and 8h
let getDataIntervally_12h_8h = function (dataCallback) {
  // // Init bulk queries. This resets all previously added queries
  client.initBulkQueries();
  // Get the BTC/USDT on Binance
  //Candle Current Price / 1m
  client.addBulkQuery("candle", "binance", "BTC/USDT", "1m");
  // MA and EMA / 1W
  client.addBulkQuery("ma", "binance", "BTC/USDT", "12h", {
    optInTimePeriod: 200,
  });
  client.addBulkQuery("ma", "binance", "BTC/USDT", "12h", {
    optInTimePeriod: 100,
  });
  client.addBulkQuery("ma", "binance", "BTC/USDT", "12h", {
    optInTimePeriod: 50,
  });
  client.addBulkQuery("ma", "binance", "BTC/USDT", "12h", {
    optInTimePeriod: 5,
  });
  client.addBulkQuery("ema", "binance", "BTC/USDT", "12h", {
    optInTimePeriod: 21,
  });
  //RSI / 1W
  client.addBulkQuery("rsi", "binance", "BTC/USDT", "12h");
  //MACD / 1W
  client.addBulkQuery("macd", "binance", "BTC/USDT", "12h");
  //Bollinger Bands / 1W
  client.addBulkQuery("bbands2", "binance", "BTC/USDT", "12h");
  //Stochastic / 1W
  client.addBulkQuery("stoch", "binance", "BTC/USDT", "12h", {
    kPeriod: 14,
    dPeriod: 3,
    kSmooth: 3,
  });
  // MA and EMA / 1D
  client.addBulkQuery("ma", "binance", "BTC/USDT", "8h", {
    optInTimePeriod: 200,
  });
  client.addBulkQuery("ma", "binance", "BTC/USDT", "8h", {
    optInTimePeriod: 100,
  });
  client.addBulkQuery("ma", "binance", "BTC/USDT", "8h", {
    optInTimePeriod: 50,
  });
  client.addBulkQuery("ma", "binance", "BTC/USDT", "8h", {
    optInTimePeriod: 5,
  });
  client.addBulkQuery("ema", "binance", "BTC/USDT", "8h", {
    optInTimePeriod: 21,
  });
  //RSI / 1D
  client.addBulkQuery("rsi", "binance", "BTC/USDT", "8h");
  //MACD / 1D
  client.addBulkQuery("macd", "binance", "BTC/USDT", "8h");
  //Bollinger Bands / 1D
  client.addBulkQuery("bbands2", "binance", "BTC/USDT", "8h");
  //Stochastic / 1D
  client.addBulkQuery("stoch", "binance", "BTC/USDT", "8h", {
    kPeriod: 14,
    dPeriod: 3,
    kSmooth: 3,
  });

  client
    .executeBulkQueries()
    .then((result) => {
      dataCallback(result);
      // console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { getDataIntervally_12h_8h };
