import { parseTrends } from "./utils/parse-trends.js";
import { fetchHTML } from "./utils/puppeter.js";
import { writeToFile } from "./utils/fs-logger.js";

async function fetchCurrentTrends() {
  const url =
    "https://trends.google.com/trends/trendingsearches/daily?geo=US&hl=en-US";
  const html = await fetchHTML(url);
  const trends = await parseTrends(html);
  writeToFile(trends);
}
fetchCurrentTrends();
