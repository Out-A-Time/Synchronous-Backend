require("dotenv").config();
const envAuth = process.env.SECRET_API_KEY_TAAPI;

// Require taapi: npm i taapi --save
const taapi = require("taapi");

// Setup client with authentication
const client = taapi.client(envAuth);

//GET BTC data every 20 seconds for 1W and 1D
let getDataIntervally_1W_1D = setInterval(function () {
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
      console.log("//////////////1W and 1D///////////////");
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}, 35000);

getDataIntervally_1W_1D;

//GET BTC data every 20 seconds for 12h and 8h
let getDataIntervally_12h_8h = setInterval(function () {
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
      console.log("//////////////12h and 8h///////////////");
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}, 20000);

getDataIntervally_12h_8h;

// //Clear Time Interv🇦l
// setTimeout(() => {
//   console.log("About to cancel");
//   clearTimeout(getDataTimeInterval);
// }, 35000);
