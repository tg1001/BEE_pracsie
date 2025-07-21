const fs = require("fs");
const {write} = require("../IOoperation/util");
async function writeFile(filepath) {
    let data = await write(filepath);
    console.log(data);
}
writeFile("../users.txt")