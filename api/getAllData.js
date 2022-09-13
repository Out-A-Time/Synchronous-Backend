const { getDataIntervally_1W_1D } = require("./getData_1W_1D");
const { getDataIntervally_12h_8h } = require("./getData_12h_8h");
const { getDataIntervally_4h_1h } = require("./getData_4h_1h");
const { getDataIntervally_15min_5min } = require("./getData_15min_5min");

function getData1W_1D() {
  function dataCallback(clientResult) {
    result = clientResult;
    console.log("########## 1W and 1D ##########");
    console.log("BTC/USDT price: ", result[0].result.close);
    console.log("MA200_1W: ", result[1].result.value);
    console.log("MA100_1W: ", result[2].result.value);
    // console.log("ALL: ", result);
  }

  try {
    getDataIntervally_1W_1D(dataCallback);
  } catch (error) {
    console.error(error);
    setTimeout(() => {
      getData1W_1D();
    }, timeDelay);
  }
}

function getData12h_8h() {
  function dataCallback(clientResult) {
    result = clientResult;
    console.log("########## 12h and 8h ##########");
    console.log("BTC/USDT price: ", result[0].result.close);
    console.log("MA200_12h: ", result[1].result.value);
    console.log("MA100_12h: ", result[2].result.value);
    // console.log("ALL: ", result);
  }
  try {
    getDataIntervally_12h_8h(dataCallback);
  } catch (error) {
    console.error(error);
    setTimeout(() => {
      getData1W_1D();
    }, timeDelay);
  }
}

function getData4h_1h() {
  function dataCallback(clientResult) {
    result = clientResult;
    console.log("########## 4h and 1h ##########");
    console.log("BTC/USDT price: ", result[0].result.close);
    console.log("MA200_4h: ", result[1].result.value);
    console.log("MA100_4h: ", result[2].result.value);
    // console.log("ALL: ", result);
  }
  try {
    getDataIntervally_4h_1h(dataCallback);
  } catch (error) {
    console.error(error);
    setTimeout(() => {
      getData1W_1D();
    }, timeDelay);
  }
}

function getData15min_5min() {
  function dataCallback(clientResult) {
    result = clientResult;
    console.log("########## 15min and 5min ##########");
    console.log("BTC/USDT price: ", result[0].result.close);
    console.log("MA200_15min: ", result[1].result.value);
    console.log("MA100_15min: ", result[2].result.value);
    // console.log("ALL: ", result);
  }
  try {
    getDataIntervally_15min_5min(dataCallback);
  } catch (error) {
    console.error(error);
    setTimeout(() => {
      getData1W_1D();
    }, timeDelay);
  }
}

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), duration);
  });
}

const getAllDataFromAPI = async function () {
  const timeDelay = 20 * 1000;
  Promise.resolve()
    .then(() => delay(0))
    .then(() => getData1W_1D())
    .then(() => delay(timeDelay))
    .then(() => getData12h_8h())
    .then(() => delay(timeDelay))
    .then(() => getData4h_1h())
    .then(() => delay(timeDelay))
    .then(() => getData15min_5min())
    .then(() => delay(timeDelay));
};

module.exports = { getAllDataFromAPI };
