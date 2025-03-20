// //File-based module
// const word = {
//   letters: (word) => {
//     return word.split("").filter((char) => char !== " ");
//   },
//   firstLetter: (word) => {
//     return word.charAt(0);
//   },
// };
// module.exports = word;

// //Build-in module
// //Asynchronous Method
// const fs = require("fs");
// const text = "Hello World";
// fs.writeFile("./example.txt", text, () => {
//   console.log("Written");
// });
// fs.readFile("./example.txt", "utf-8", (err, data) => {
//   if (err) return err;
//   console.log(data);
// });
// //Synchronous Method
// fs.writeFileSync("./sample.txt", text, () => {
//   console.log("Written");
// });
// fs.readFileSync("./example.txt", "utf-8", (err, data) => {
//   if (err) return err;
//   console.log(data);
// });
// const path = require("path");
// console.log(path.extname("./show.js"));
// console.log(path.basename("./show.js"));
// console.log(path.dirname("./show.js"));

// nodemon and server configuration
const http = require("http");
const PORT = 3000;
const hostname  = "localhost";
const server = http.createServer((req, res) => {
  if(req.url==="/about") res.end("<h1>About Page</h1>");
  if(req.url==="/contact") res.end("<h1>Contact Page</h1>");
  if(req.url==="/") res.end("<h1>Home Page</h1>");
  else res.end("<h1>404 Not Found</h1>");
});
server.listen(PORT, hostname ,() => {
  console.log(`Server is running on http://${hostname}:${PORT}`);
});