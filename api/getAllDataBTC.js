const { getDataBTC_1W_1D } = require("./getDataBTC/getDataBTC_1W_1D");
const { getDataBTC_12h_8h } = require("./getDataBTC/getDataBTC_12h_8h");
const { getDataBTC_4h_1h } = require("./getDataBTC/getDataBTC_4h_1h");
const { getDataBTC_15min_5min } = require("./getDataBTC/getDataBTC_15min_5min");
const {
  getDataBTC_1W_1D_handler,
  getDataBTC_12h_8h_handler,
  getDataBTC_4h_1h_handler,
  getDataBTC_15min_5min_handler,
  delay,
} = require("./getDataBTC_handlers");

const getAllDataBTCFromAPI = async function () {
  const timeDelay = 20 * 1000;

  Promise.resolve()
    .then(() => delay(0))
    .then(() => {
      try {
        getDataBTC_1W_1D(getDataBTC_1W_1D_handler);
      } catch (error) {
        console.error(error);
        setTimeout(() => {
          getDataBTC_1W_1D();
        }, timeDelay);
      }
    })
    .then(() => delay(timeDelay))
    .then(() => {
      try {
        getDataBTC_12h_8h(getDataBTC_12h_8h_handler);
      } catch (error) {
        console.error(error);
        setTimeout(() => {
          getDataBTC_12h_8h();
        }, timeDelay);
      }
    })
    .then(() => delay(timeDelay))
    .then(() => {
      try {
        getDataBTC_4h_1h(getDataBTC_4h_1h_handler);
      } catch (error) {
        console.error(error);
        setTimeout(() => {
          getDataBTC_4h_1h();
        }, timeDelay);
      }
    })
    .then(() => delay(timeDelay))
    .then(() => {
      try {
        getDataBTC_15min_5min(getDataBTC_15min_5min_handler);
      } catch (error) {
        console.error(error);
        setTimeout(() => {
          getDataBTC_15min_5min();
        }, timeDelay);
      }
    })
    .then(() => delay(timeDelay));
};

module.exports = { getAllDataBTCFromAPI };
