// index.js
const Mustache = require("mustache");
const fs = require("fs");

const MUSTACHE_MAIN_DIR = "./main.mustache";

function generateReadMe() {
  const template = fs.readFileSync(MUSTACHE_MAIN_DIR, "utf8");
  const output = Mustache.render(template, {});
  fs.writeFileSync("README.md", output);
}

generateReadMe();
