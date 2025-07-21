//console.log(process.argv)
const fs = require("fs");
console.log("enter the input");
fs.writeFile("../demo.txt", process.argv[2], function(err) {
    if (err) return console.log(err);
    console.log("file written successfully");
})