const { getDataIntervally_1W_1D } = require("./getData_1W_1D");
const { getDataIntervally_12h_8h } = require("./getData_12h_8h");
const { getDataIntervally_4h_1h } = require("./getData_4h_1h");
const { getDataIntervally_15min_5min } = require("./getData_15min_5min");

function getDataSynched() {
  getDataIntervally_1W_1D();
  setTimeout(function () {
    getDataIntervally_12h_8h();
  }, 20000);
  setTimeout(function () {
    getDataIntervally_4h_1h();
  }, 20000);
  setTimeout(function () {
    getDataIntervally_15min_5min();
  }, 20000);
}

getDataSynched();

// //Clear Time Interv🇦l
// setTimeout(() => {
//   console.log("About to cancel");
//   clearTimeout(getDataTimeInterval);
// }, 35000);
