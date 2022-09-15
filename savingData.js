//Load file system module
const fs = require("fs");

const { writeFile, readFile } = require("fs");
const { promisify } = require("util");

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
