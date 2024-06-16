import cheerio from "cheerio";
import { convertToISODate } from "./date-convert.js";
export async function parseTrends(html) {
  const $ = cheerio.load(html);
  const allTrends = [];
  $("div.feed-list-wrapper").each((myinddx, myele) => {
    let trends = [];
    let header = $(myele).find("div.content-header-title").text();
    $(myele)
      .find("md-list")
      .each((index, element) => {
        let title = $(element).find("div.title a").text().trim();
        let traffic = $(element)
          .find("div.search-count-title")
          .text()
          .trim()
          .replace("/n", "")
          .replace(" ", "");
        let trifficTag = $(element)
          .find("div.search-count div.text")
          .text()
          .trim();
        let description = $(element).find("div.summary-text").text().trim();
        let relatedLinks = {};

        let data = $(element).find("div.image-link-wrapper a.visible");
        if (data) {
          relatedLinks = {
            title: $(data).find("div.image-text").text().trim(),
            url: $(data).attr("href"),
            image_url: $(data).find("img").attr("src"),
          };
        }

        trends.push({
          title,
          traffic,
          description,
          trifficTag,
          relatedLinks,
          header: header,
        });
      });
    allTrends.push({
      [convertToISODate(header)]: trends,
    });
  });

  return allTrends;
}
