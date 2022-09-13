const express = require("express");
const app = express();
const PORT = process.env.port || 3000;

//unpacks request bodies
app.use(express.json());

// test route
app.get("/", function (req, res) {
  res.send("<h1>Test route up and running! For more go to: /BTC_USDT</h1>");
});

const { getDataIntervally_1W_1D } = require("./api/getData_1W_1D");
const { getDataIntervally_12h_8h } = require("./api/getData_12h_8h");
const { getDataIntervally_4h_1h } = require("./api/getData_4h_1h");
const { getDataIntervally_15min_5min } = require("./api/getData_15min_5min");

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

getAllDataFromAPI();

//listening on port 3000
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
