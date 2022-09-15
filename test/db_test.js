const hi = console.log("hello from DB");

let { getDataIntervally_1W_1D } = require("../api/getData_1W_1D");

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

[
  {
    id: "candle_binance_BTC/USDT_1m",
    indicator: "candle",
    result: {
      timestampHuman: "2022-09-13 09:52:00 (Tuesday) UTC",
      timestamp: "1663062720",
      open: "22390.34",
      high: "22397.88",
      low: "22380.45",
      close: "22382.94",
      volume: "196.78234",
    },
  },
  {
    id: "ma_binance_BTC/USDT_1w",
    indicator: "ma",
    result: { value: "23327.973650000007" },
  },
  {
    id: "ma_binance_BTC/USDT_1w",
    indicator: "ma",
    result: { value: "38703.0937" },
  },
  {
    id: "ma_binance_BTC/USDT_1w",
    indicator: "ma",
    result: { value: "38002.02440000002" },
  },
  {
    id: "ma_binance_BTC/USDT_1w",
    indicator: "ma",
    result: { value: "21056.20400000004" },
  },
  {
    id: "ema_binance_BTC/USDT_1w",
    indicator: "ema",
    result: { value: "25711.10767740039" },
  },
  {
    id: "rsi_binance_BTC/USDT_1w",
    indicator: "rsi",
    result: { value: "38.57480070834185" },
  },
  {
    id: "macd_binance_BTC/USDT_1w",
    indicator: "macd",
    result: {
      valueMACD: "-4484.49162584278",
      valueMACDSignal: "-5042.533175246323",
      valueMACDHist: "558.0415494035424",
    },
  },
  {
    id: "bbands2_binance_BTC/USDT_1w",
    indicator: "bbands2",
    result: {
      valueUpperBand: "32864.14868929877",
      valueMiddleBand: "24142.26249999995",
      valueLowerBand: "15420.376310701135",
    },
  },
  {
    id: "stoch_binance_BTC/USDT_1w",
    indicator: "stoch",
    result: { valueK: "32.38611075037172", valueD: "23.510773615533363" },
  },
  {
    id: "ma_binance_BTC/USDT_1d",
    indicator: "ma",
    result: { value: "30019.973549999973" },
  },
  {
    id: "ma_binance_BTC/USDT_1d",
    indicator: "ma",
    result: { value: "22088.86790000002" },
  },
  {
    id: "ma_binance_BTC/USDT_1d",
    indicator: "ma",
    result: { value: "21968.759800000003" },
  },
  {
    id: "ma_binance_BTC/USDT_1d",
    indicator: "ma",
    result: { value: "21922.737999999972" },
  },
  {
    id: "ema_binance_BTC/USDT_1d",
    indicator: "ema",
    result: { value: "21001.688593790597" },
  },
  {
    id: "rsi_binance_BTC/USDT_1d",
    indicator: "rsi",
    result: { value: "61.21598449712614" },
  },
  {
    id: "macd_binance_BTC/USDT_1d",
    indicator: "macd",
    result: {
      valueMACD: "-3.2072634419819224",
      valueMACDSignal: "-413.223319024793",
      valueMACDHist: "410.0160555828111",
    },
  },
  {
    id: "bbands2_binance_BTC/USDT_1d",
    indicator: "bbands2",
    result: {
      valueUpperBand: "22473.742246879912",
      valueMiddleBand: "20413.498999999996",
      valueLowerBand: "18353.25575312008",
    },
  },
  {
    id: "stoch_binance_BTC/USDT_1d",
    indicator: "stoch",
    result: { valueK: "96.91812313459214", valueD: "96.54755994402683" },
  },
];

module.exports = { hi, dataBase, dataBase_1W_1D };
