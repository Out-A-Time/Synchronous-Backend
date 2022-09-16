const { getDataIntervally_1W_1D } = require("./getDataBTC/getDataBTC_1W_1D");
const { getDataIntervally_12h_8h } = require("./getDataBTC/getDataBTC_12h_8h");
const { getDataIntervally_4h_1h } = require("./getDataBTC/getDataBTC_4h_1h");
const {
  getDataIntervally_15min_5min,
} = require("./getDataBTC/getDataBTC_15min_5min");

function getData1W_1D() {
  function dataCallback(result) {
    resultBTC_1W_1D = result;
    console.log("########## 1W and 1D ##########");
    // console.log("ALL: ", resultBTC_1W);
    return resultBTC_1W_1D;
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
  function dataCallback(result) {
    resultBTC_12h_8h = result;
    console.log("########## 12h and 8h ##########");
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

// function getData4h_1h() {
//   function dataCallback(clientResult) {
//     const result = clientResult;
//     console.log("########## 4h and 1h ##########");

//   }
//   try {
//     getDataIntervally_4h_1h(dataCallback);
//   } catch (error) {
//     console.error(error);
//     setTimeout(() => {
//       getData1W_1D();
//     }, timeDelay);
//   }
// }

// function getData15min_5min() {
//   function dataCallback(clientResult) {
//     const result = clientResult;

//   }
//   try {
//     getDataIntervally_15min_5min(dataCallback);
//   } catch (error) {
//     console.error(error);
//     setTimeout(() => {
//       getData1W_1D();
//     }, timeDelay);
//   }
// }

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), duration);
  });
}

const getAllDataBTCFromAPI = async function () {
  const timeDelay = 20 * 1000;
  Promise.resolve()
    .then(() => delay(0))
    .then(() => getData1W_1D())
    .then(() => delay(timeDelay))
    .then(() => getData12h_8h());
  // .then(() => delay(timeDelay))
  // .then(() => getData4h_1h())
  // .then(() => delay(timeDelay))
  // .then(() => getData15min_5min())
  // .then(() => delay(timeDelay));
};

module.exports = { getAllDataBTCFromAPI, getData1W_1D };
