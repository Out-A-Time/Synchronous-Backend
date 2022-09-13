const hi = console.log("hello from DB");

let { getDataIntervally_1W_1D } = require("./getData_1W_1D");

let dataBase = {
  btcPrice: 0,
  MA200_1W: 0,
  MA100_1W: 0,
  MA50_1W: 0,
  MA5_1W: 0,
  EMA_1W: 0,
  RSI_1W: 0,
  MACD_1W_value: 0,
  MACD_1W_signal: 0,
  MACD_1W_hist: 0,
  BB_1W_upper: 0,
  BB_1W_middle: 0,
  BB_1W_lower: 0,
  Stoch_1W_valueK: 0,
  Stoch_1W_valueD: 0,
};

let dataBase_1W_1D = {};

module.exports = { hi, dataBase, dataBase_1W_1D };
