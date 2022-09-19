const pageLayout = require("./pageLayout");

// let { getData1W_1D } = require("../api/getAllDataBTC");

function loadContentBTC({ req }) {
  return pageLayout({
    content: `
    <h2>BTC-USDT Current Price: $${Math.round(
      resultBTC_1W_1D[0].result.close
    )}</h2>
    <div class="columns is-vcentered is-centered">
      <div class="column is-3">
        <div class="message-header">Time interval: 1W</div>
        <div>        
          <h5>MA200_1W: $${Math.round(resultBTC_1W_1D[1].result.value)}</h5>
          <h5>MA100_1W: $${Math.round(resultBTC_1W_1D[2].result.value)}</h5>
          <h5>MA50_1W: $${Math.round(resultBTC_1W_1D[3].result.value)}</h5>
          <h5>MA5_1W: $${Math.round(resultBTC_1W_1D[4].result.value)}</h5>
          <h5>EMA21_1W: $${Math.round(resultBTC_1W_1D[5].result.value)}</h5>
          <h5>RSI_1W: ${Math.round(resultBTC_1W_1D[6].result.value)}</h5>
        </div>
      </div>

      <div class="column is-3">
        <div class="message-header">Time interval: 1D</div>
        <div>        
          <h5>MA200_1W: $${Math.round(resultBTC_1W_1D[1].result.value)}</h5>
          <h5>MA100_1W: $${Math.round(resultBTC_1W_1D[2].result.value)}</h5>
          <h5>MA50_1W: $${Math.round(resultBTC_1W_1D[3].result.value)}</h5>
          <h5>MA5_1W: $${Math.round(resultBTC_1W_1D[4].result.value)}</h5>
          <h5>EMA21_1W: $${Math.round(resultBTC_1W_1D[5].result.value)}</h5>
          <h5>RSI_1W: ${Math.round(resultBTC_1W_1D[6].result.value)}</h5>
        </div>
      </div>

      <div class="column is-3">
        <div class="message-header">Time interval: 12h</div>
        <div>        
          <h5>MA200_1W: $${Math.round(resultBTC_1W_1D[1].result.value)}</h5>
          <h5>MA100_1W: $${Math.round(resultBTC_1W_1D[2].result.value)}</h5>
          <h5>MA50_1W: $${Math.round(resultBTC_1W_1D[3].result.value)}</h5>
          <h5>MA5_1W: $${Math.round(resultBTC_1W_1D[4].result.value)}</h5>
          <h5>EMA21_1W: $${Math.round(resultBTC_1W_1D[5].result.value)}</h5>
          <h5>RSI_1W: ${Math.round(resultBTC_1W_1D[6].result.value)}</h5>
        </div>
      </div>


      <div class="column is-3">
        <div class="message-header">Time interval: 8h</div>
        <div>        
          <h5>MA200_1W: $${Math.round(resultBTC_1W_1D[1].result.value)}</h5>
          <h5>MA100_1W: $${Math.round(resultBTC_1W_1D[2].result.value)}</h5>
          <h5>MA50_1W: $${Math.round(resultBTC_1W_1D[3].result.value)}</h5>
          <h5>MA5_1W: $${Math.round(resultBTC_1W_1D[4].result.value)}</h5>
          <h5>EMA21_1W: $${Math.round(resultBTC_1W_1D[5].result.value)}</h5>
          <h5>RSI_1W: ${Math.round(resultBTC_1W_1D[6].result.value)}</h5>
        </div>
      </div>
    </div>

    <div class="columns is-vcentered is-centered">
      <div class="column is-3">
      <div class="message-header">Time interval: 4h</div>
        <div>        
          <h5>MA200_1W: $${Math.round(resultBTC_1W_1D[1].result.value)}</h5>
          <h5>MA100_1W: $${Math.round(resultBTC_1W_1D[2].result.value)}</h5>
          <h5>MA50_1W: $${Math.round(resultBTC_1W_1D[3].result.value)}</h5>
          <h5>MA5_1W: $${Math.round(resultBTC_1W_1D[4].result.value)}</h5>
          <h5>EMA21_1W: $${Math.round(resultBTC_1W_1D[5].result.value)}</h5>
          <h5>RSI_1W: ${Math.round(resultBTC_1W_1D[6].result.value)}</h5>
        </div>
      </div>

      <div class="column is-3">
        <div class="message-header">Time interval: 1h</div>
        <div>        
          <h5>MA200_1W: $${Math.round(resultBTC_1W_1D[1].result.value)}</h5>
          <h5>MA100_1W: $${Math.round(resultBTC_1W_1D[2].result.value)}</h5>
          <h5>MA50_1W: $${Math.round(resultBTC_1W_1D[3].result.value)}</h5>
          <h5>MA5_1W: $${Math.round(resultBTC_1W_1D[4].result.value)}</h5>
          <h5>EMA21_1W: $${Math.round(resultBTC_1W_1D[5].result.value)}</h5>
          <h5>RSI_1W: ${Math.round(resultBTC_1W_1D[6].result.value)}</h5>
        </div>
      </div>

      <div class="column is-3">
        <div class="message-header">Time interval: 15m</div>
        <div>        
          <h5>MA200_1W: $${Math.round(resultBTC_1W_1D[1].result.value)}</h5>
          <h5>MA100_1W: $${Math.round(resultBTC_1W_1D[2].result.value)}</h5>
          <h5>MA50_1W: $${Math.round(resultBTC_1W_1D[3].result.value)}</h5>
          <h5>MA5_1W: $${Math.round(resultBTC_1W_1D[4].result.value)}</h5>
          <h5>EMA21_1W: $${Math.round(resultBTC_1W_1D[5].result.value)}</h5>
          <h5>RSI_1W: ${Math.round(resultBTC_1W_1D[6].result.value)}</h5>
        </div>
      </div>

      <div class="column is-3">
        <div class="message-header">Time interval: 5m</div>
        <div>        
          <h5>MA200_1W: $${Math.round(resultBTC_1W_1D[1].result.value)}</h5>
          <h5>MA100_1W: $${Math.round(resultBTC_1W_1D[2].result.value)}</h5>
          <h5>MA50_1W: $${Math.round(resultBTC_1W_1D[3].result.value)}</h5>
          <h5>MA5_1W: $${Math.round(resultBTC_1W_1D[4].result.value)}</h5>
          <h5>EMA21_1W: $${Math.round(resultBTC_1W_1D[5].result.value)}</h5>
          <h5>RSI_1W: ${Math.round(resultBTC_1W_1D[6].result.value)}</h5>
        </div>
      </div>
      
    </div>
        `,
  });
}

module.exports = loadContentBTC;
