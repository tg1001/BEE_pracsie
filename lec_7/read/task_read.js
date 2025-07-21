const fs=require("fs");
const {read} = require("../IOoperation/util");

async function readFile(filepath) {
    let data = await read(filepath);
    console.log(data);
}
readFile("../users.txt")