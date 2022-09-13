const express = require("express");
const app = express();
const PORT = process.env.port || 3000;

const { getAllDataFromAPI } = require("./api/getAllData");

//unpacks request bodies
app.use(express.json());

// test route
app.get("/", function (req, res) {
  res.send(`<h1>Test route up and running! For more go to: /BTC_USDT</h1>
  <h2>BTC-USDT Price: $${result[0].result.close}</h2>`);
});

app.get("/BTC_USDT", function (req, res) {
  res.send(`<h1>BTC-USDT:</h1>
  <h2>BTC-USDT Current Price: $${result[0].result.close}</h2>
  <h2>MA200_1W: ${result[1].result.value}</h2>
  <h2>MA100_1W: ${result[2].result.value}</h2>
  <h2>MA50_1W: ${result[3].result.value}</h2>
  <h2>MA5_1W: ${result[4].result.value}</h2>
  <h2>EMA21_1W: ${result[5].result.value}</h2>
  <h2>RSI_1W: ${result[6].result.value}</h2>
  <h2>MACD_1W: ${result[7].result}</h2>
  <h2>Bollinger Bands_1W: </h2>
        <h2>ValueUpperBand: ${result[8].result.valueUpperBand}</h2>
        <h2>ValueMiddleBand: ${result[8].result.valueMiddleBand}</h2>
        <h2>ValueLowerBand: ${result[8].result.valueLowerBand}</h2>
  <h2>Stochastic_1W: </h2>
    <h2>ValueK: ${result[9].result.valueK}</h2>
    <h2>ValueD: ${result[9].result.valueD}</h2>
  `);
});

getAllDataFromAPI();

//listening on port 3000
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
