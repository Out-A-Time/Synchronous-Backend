const filehandler = require("../data_storage/savingData");

function getDataBTC_1W_1D_handler(result) {
  resultBTC_1W_1D = result;

  console.log("########## 1W and 1D ##########");
  filehandler("./data_storage/dataBTC/dataBTC_1W_1D.json", resultBTC_1W_1D);
  // console.log("ALL: ", resultBTC_1W_1D);
}

function getDataBTC_12h_8h_handler(result) {
  resultBTC_12h_8h = result;
  console.log("########## 12h and 8h ##########");
  filehandler("./data_storage/dataBTC/dataBTC_12h_8h.json", resultBTC_12h_8h);
}

function getDataBTC_4h_1h_handler(result) {
  resultBTC_4h_1h = result;
  console.log("########## 4h and 1h ##########");
  filehandler("./data_storage/dataBTC/dataBTC_4h_1h.json", resultBTC_4h_1h);
}

function getDataBTC_15min_5min_handler(result) {
  resultBTC_15min_5min = result;
  console.log("########## 15min and 5min ##########");
  filehandler(
    "./data_storage/dataBTC/dataBTC_15min_5min.json",
    resultBTC_15min_5min
  );
}

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), duration);
  });
}

module.exports = {
  getDataBTC_1W_1D_handler,
  getDataBTC_12h_8h_handler,
  getDataBTC_4h_1h_handler,
  getDataBTC_15min_5min_handler,
  delay,
};
