//File-based module
const word = {
  letters: (word) => {
    return word.split("").filter((char) => char !== " ");
  },
  firstLetter: (word) => {
    return word.charAt(0);
  },
};
module.exports = word;

//Build-in module
//Asynchronous Method
const fs = require("fs");
const text = "Hello World";
fs.writeFile("./example.txt", text, () => {
  console.log("Written");
});
fs.readFile("./example.txt", "utf-8", (err, data) => {
  if (err) return err;
  console.log(data);
});
//Synchronous Method
fs.writeFileSync("./sample.txt", text, () => {
  console.log("Written");
});
fs.readFileSync("./example.txt", "utf-8", (err, data) => {
  if (err) return err;
  console.log(data);
});
const path = require("path");
console.log(path.extname("./show.js"));
console.log(path.basename("./show.js"));
console.log(path.dirname("./show.js"));

//OS related functions
const os = require("os");
console.log(os.platform);
console.log(os.release);
console.log(os.hostname);

//Routing and http server configuration
const https = require("https");
const server = https.createServer((req, res) => {
  res.end("Hello, World!");
});
server.listen(2000);
