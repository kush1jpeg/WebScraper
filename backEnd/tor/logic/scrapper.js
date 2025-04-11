import { axios } from "axios";
const HttpsProxyAgent = require("https-proxy-agent");

async function scrapeDarknet(url) {
  try {
    const agent = new HttpsProxyAgent("socks5h://127.0.0.1:9050");

    const res = await axios.get(url, { httpsAgent: agent });
    res.status; // ← HTTP status code (200, 404, 500, etc.)
    res.headers; // ← HTTP response headers
    res.config; // ← the request config
    res.request; // ← raw request data
    console.log(`Scraped from ${url}:\n`);
    if (res.status > 200 && res.status < 300) {
      cheerioScrape(res.data);
    }
  } catch (err) {
    console.error(`Failed to scrape ${url}:`, err.message);
  }
}

module.exports = { scrapeDarknet };
