//node js is not just a runtime environemnt but provides modules 

const fs = require("fs");
//when u make ur own module you give full path
//whereas BUILT MODULE just give the name
//fs is a built in module
fs.writeFile("../demotemp.txt", "Hello World sleeppy", function(err,data){
    if(err)return console.log("Error writing file:", err);
   console.log(data);
})