const { getDataIntervally_1W_1D } = require("./getData_1W_1D");
const { getDataIntervally_12h_8h } = require("./getData_12h_8h");
const { getDataIntervally_4h_1h } = require("./getData_4h_1h");
const { getDataIntervally_15min_5min } = require("./getData_15min_5min");

// Promise.resolve()
//   .then(() => delay(0))
//   .then(() => log1())
//   .then(() => delay(16000))
//   .then(() => log2())
//   .then(() => delay(16000))
//   .then(() => log3())
//   .then(() => delay(16000))
//   .then(() => log4());

Promise.resolve()
  .then(() => delay(0))
  .then(async () => await log1())
  .then(() => delay(16000))
  .then(async () => await log1());

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), duration);
  });
}

async function log1() {
  try {
    await getDataIntervally_1W_1D();
  } catch (error) {
    console.error(error);
    setTimeout(() => {
      log1();
    }, 16000);
  }
}

function log2() {
  try {
    getDataIntervally_12h_8h();
  } catch (error) {
    console.error(error);
    setTimeout(() => {
      log1();
    }, 16000);
  }
}

function log3() {
  try {
    getDataIntervally_4h_1h();
  } catch (error) {
    console.error(error);
    setTimeout(() => {
      log1();
    }, 16000);
  }
}

function log4() {
  try {
    getDataIntervally_15min_5min();
  } catch (error) {
    console.error(error);
    setTimeout(() => {
      log1();
    }, 16000);
  }
}
