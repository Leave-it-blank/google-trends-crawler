import fs from "fs";
/**
 * @param {Array} trends
 * @returns {Promise<void>}
 * */
export async function writeToFile(trends) {
  const readFile = fs.readFileSync("trends.json");
  const fileData = JSON.parse(readFile);
  fileData.push(...trends);

  fs.writeFileSync("trends.json", JSON.stringify(fileData, null, 2));
}

export async function writeToFileSimple(data) {
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
}
