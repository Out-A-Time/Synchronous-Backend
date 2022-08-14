require("dotenv").config();
const envAuth = process.env.SECRET_API_KEY_TAAPI;

// Require taapi: npm i taapi --save
const taapi = require("taapi");

// Setup client with authentication
const client = taapi.client(envAuth);

//GET BTC price and data for 1W and 1D
let getDataIntervally_1W_1D = function () {
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
      console.log("########## 1W and 1D ##########");
      console.log("BTC/USDT price: ", result[0].result.close);
      // console.log(result);
      return result;
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { getDataIntervally_1W_1D };
