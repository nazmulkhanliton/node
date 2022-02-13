const fs = require("fs");
console.log("Hello test");

//File creating
fs.writeFileSync("read.txt", "Hello World");
//Now read.txt file overwrite
fs.writeFileSync("read.txt", "Hello");
//File Read
var data = fs.readFileSync("read.txt");
console.log(data.toString());
console.log("Program Ended");
