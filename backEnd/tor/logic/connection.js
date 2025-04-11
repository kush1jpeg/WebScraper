import { Scrapper } from "./scrapper.js";
const isWin = process.platform === "win32";
const torPath = isWin
  ? path.join(__dirname, "tor", "bundle", "tor", "tor.exe")
  : path.join(__dirname, "tor", "bundle", "tor", "tor");
//  PATH to tor through .so files if on windows change the last tor to tor.exe as window returns a .exe file
const { spawn } = require("child_process");
let torBooted = false;
// TOR proxy

export const startTorAndScrape = (url) => {
  if (torBooted) {
    console.log("Tor already running bruh");
    Scrapper(url); // safe to call again
    return;
  } else {
    const tor = spawn(torPath); //spawn() lets you run any system command or executable (like launching tor.exe or tor) in the background.
    tor.stdout.on("data", (data) => {
      const log = data.toString();
      console.log(`[Tor] ${data}`); //for bootstrap messages
      if (log.includes("Bootstrapped 100%")) {
        console.log("Tor fully connected.");
        torBooted = true;
        // callng the Scrapper
        Scrapper(url);
      }
    });

    tor.stderr.on("data", (data) => {
      console.error(`[Tor Error] ${data}`); //for error messages
    });

    tor.on("close", (code) => {
      console.log(`[Tor] exited with code ${code}`); //for if the app crash
    });
  }
};

export { torBooted }; //to check in services path if tors up or not

//The tor connection is mostly vibe-coded ---lol
//cheerio to extract the html from the onion websites
