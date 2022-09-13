const { getDataIntervally_1W_1D } = require("./getData_1W_1D");
const { getDataIntervally_12h_8h } = require("./getData_12h_8h");
const { getDataIntervally_4h_1h } = require("./getData_4h_1h");
const { getDataIntervally_15min_5min } = require("./getData_15min_5min");

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), duration);
  });
}

function getData1W_1D() {
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
  try {
    getDataIntervally_15min_5min(dataCallback);
  } catch (error) {
    console.error(error);
    setTimeout(() => {
      getData1W_1D();
    }, timeDelay);
  }
}

function dataCallback(clientResult) {
  result = clientResult;
  console.log("HERE: ", result[0].result.close);
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

getAllDataFromAPI();
