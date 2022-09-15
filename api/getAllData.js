const { getDataIntervally_1W_1D } = require("./getData_1W_1D");
const { getDataIntervally_12h_8h } = require("./getData_12h_8h");
const { getDataIntervally_4h_1h } = require("./getData_4h_1h");
const { getDataIntervally_15min_5min } = require("./getData_15min_5min");

const { writeFile, readFile } = require("fs");
const { promisify } = require("util");

// let resultBTC_1W_1D;

function getData1W_1D() {
  function dataCallback(result) {
    resultBTC_1W_1D = result;
    console.log("########## 1W and 1D ##########");
    console.log("BTC/USDT price: ", resultBTC_1W_1D[0].result.close);
    console.log("MA200_1W: ", resultBTC_1W_1D[1].result.value);
    console.log("MA100_1W: ", resultBTC_1W_1D[2].result.value);
    // console.log("ALL: ", resultBTC_1W);

    ////////WRITE READ RESULTS///////////
    const readFileasync = promisify(readFile);
    const writeFileasync = promisify(writeFile);

    const file_handler = async () => {
      try {
        const content = await writeFileasync(
          "./writeMe.json",
          JSON.stringify(result)
        );
        try {
          const data = await readFileasync("./writeMe.json", "utf-8");
          console.log("New file has been created .");
          console.log(data);
        } catch (error) {
          throw error;
        }
      } catch (error) {
        throw error;
      }
    };

    file_handler();

    /////////////////////////////////////
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

// console.log(resultBTC_1W_1D);

function getData12h_8h() {
  function dataCallback(result) {
    resultBTC_12h_8h = result;
    console.log("########## 12h and 8h ##########");
    console.log("BTC/USDT price: ", resultBTC_12h_8h[0].result.close);
    console.log("MA200_12h: ", resultBTC_12h_8h[1].result.value);
    console.log("MA100_12h: ", resultBTC_12h_8h[2].result.value);
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

// function getData4h_1h() {
//   function dataCallback(clientResult) {
//     const result = clientResult;
//     console.log("########## 4h and 1h ##########");
//     console.log("BTC/USDT price: ", result[0].result.close);
//     console.log("MA200_4h: ", result[1].result.value);
//     console.log("MA100_4h: ", result[2].result.value);
//     // console.log("ALL: ", result);
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
//     console.log("########## 15min and 5min ##########");
//     console.log("BTC/USDT price: ", result[0].result.close);
//     console.log("MA200_15min: ", result[1].result.value);
//     console.log("MA100_15min: ", result[2].result.value);
//     // console.log("ALL: ", result);
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

const getAllDataFromAPI = async function () {
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

module.exports = { getAllDataFromAPI, getData1W_1D };
