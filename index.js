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
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/doom-2016") res.end("Rip and Tear!! Until it's Done!!");
  if (req.url === "/doom-eternal")
    res.end("The Only Thing They Fear Is You!!!");
  if (req.url === "/doom-the-dark-ages") res.end("Stand And Fight!!");
  else res.end("<h1>Thy Flesh Consumed</h1>");
});
server.listen(3000, "localhost", () => {
  console.log("Server is running http://localhost:3000");
});
