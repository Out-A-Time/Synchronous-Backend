const express = require("express");
const app = express();
const PORT = process.env.port || 3000;

const coinsRouter = require("./routes/coinsRouter");

const { getAllDataFromAPI } = require("./api/getAllData");

//unpacks request bodies
// app.use(express.json());

//use the coinsRouter.js to handle endpoints that start with /coins-pair
app.use("/coins-pair", coinsRouter);

// Root path
app.get("/", function (req, res) {
  res.send(`<h1>Test route up and running! For more go to: /BTC_USDT</h1>
  <h2>BTC-USDT Price: $${resultBTC_1W_1D[0].result.close}</h2>`);
});

getAllDataFromAPI();

//listening on port 3000
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
