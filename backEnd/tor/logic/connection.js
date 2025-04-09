import { Scrapper } from "./scrapper.js";
const torPath = path.join(__dirname, "tor", "bundle", "tor", "tor"); //  PATH TO THE directory CHANGE TO  tor.
const { spawn } = require("child_process");
const tor = spawn(torPath); //spawn() lets you run any system command or executable (like launching tor.exe or tor) in the background.
const axios = require("axios");
const HttpsProxyAgent = require("https-proxy-agent");

// TOR proxy
const agent = new HttpsProxyAgent("socks5h://127.0.0.1:9050"); //default

tor.stdout.on("data", (data) => {
  const log = data.toString();
  console.log(`[Tor] ${data}`); //for bootstrap messages
  if (log.includes("Bootstrapped 100%")) {
    console.log("Tor fully connected.");
    // callng the Scrapper
    Scrapper();
  }
});

tor.stderr.on("data", (data) => {
  console.error(`[Tor Error] ${data}`); //for error messages
});

tor.on("close", (code) => {
  console.log(`[Tor] exited with code ${code}`); //for if the app crash
});

//The tor connection is mostly vibe-coded ---lol
//cheerio to extract the html from the onion websites
