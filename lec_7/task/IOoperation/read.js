const fs=require("fs");
const {read} = require("./util");

async function readFile(filepath) {
    let data = await read(filepath);
    console.log(data);
}
readFile("../users.txt")