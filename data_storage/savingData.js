//Load file system module
const fs = require("fs");

const { writeFile, readFile } = require("fs");
const { promisify } = require("util");
const { getDataBTC_1W_1D_handler } = require("../api/getDataBTC_handlers");

const readFileasync = promisify(readFile);
const writeFileasync = promisify(writeFile);

const file_handler = async (filename, result) => {
  try {
    const content = await writeFileasync(filename, JSON.stringify(result));
    console.log(`File has been saved: ${filename}`);
    try {
      const data = await readFileasync(filename, "utf-8");
      console.log(`File has been read: ${filename}`);
      console.log("READ DATA:", data);
    } catch (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = file_handler;
