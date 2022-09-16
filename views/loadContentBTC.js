const pageLayout = require("./pageLayout");

// let { getData1W_1D } = require("../api/getAllDataBTC");

function loadContentBTC({ req }) {
  return pageLayout({
    content: `
    <h2>BTC-USDT Current Price: $${resultBTC_1W_1D[0].result.close}</h2>
        <h2>Time interval: 1W</h2>
        <h4>MA200_1W: ${resultBTC_1W_1D[1].result.value}</h4>
        <h4>MA100_1W: ${resultBTC_1W_1D[2].result.value}</h4>
        <h4>MA50_1W: ${resultBTC_1W_1D[3].result.value}</h4>
        <h4>MA5_1W: ${resultBTC_1W_1D[4].result.value}</h4>
        <h4>EMA21_1W: ${resultBTC_1W_1D[5].result.value}</h4>
        <h4>RSI_1W: ${resultBTC_1W_1D[6].result.value}</h4>
        <h2>Time interval: 1D</h2>
        <p>here are going to be all fetched data</p>
        <h2>Time interval: 12h</h2>
        <h4>MA200_12h_8h: $ {resultBTC_12h_8h[1].result.value}</h4>
        <h4>MA100_12h_8h: $ {resultBTC_12h_8h[2].result.value}</h4> 
        <p>here are going to be all fetched data</p>
        <h2>Time interval: 8h</h2>
        <p>here are going to be all fetched data</p>
        <h2>Time interval: 4h</h2>
        <p>here are going to be all fetched data</p>
        <h2>Time interval: 1h</h2>
        <p>here are going to be all fetched data</p>
        <h2>Time interval: 15min</h2>
        <p>here are going to be all fetched data</p>
        <h2>Time interval: 5min</h2>
        <p>here are going to be all fetched data</p>
        `,
  });
}

module.exports = loadContentBTC;
