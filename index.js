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
console.log("Nothing");
