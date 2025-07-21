const fs = require("fs");

// read two files and write to a third file
// --------------------attempt 1
fs.readFile("../demo.txt", function(err, data){
    if(err) return console.log(err);
    fs.writeFile("../output.txt", data, functuion(err) {
        if(err) return console.log("Error ", err);
       console.log(data);
       console.log("file write from demo");
    })
})

fs.readFile("../demo2.txt", function(err, data){
    if(err) return console.log(err);
    fs.appendFile("../output.txt", data, functuion(err) {
        if(err) return console.log("Error", err);
        console.log(data);
        console.log("file write from demo2");
    })
})

// // ---------------attempt 2 read two frilw and write in 3rd

// async function read2() {
//   try {
//     fs.readFile("../demo.txt", function(err, data){
//     if(err) return console.log(err);
//     await fs.writeFile("../output.txt", data, functuion(err) {
//         if(err) return console.log("Error ", err);
//        console.log(data);
//        console.log("file write from demo");
//     })

//     fs.readFile("../demo2.txt", function(err, data){
//     if(err) return console.log(err);
//     fs.appendFile("../output.txt", data, functuion(err) {
//         if(err) return console.log("Error", err);
//         console.log(data);
//         console.log("file write from demo2");
//     })
// })

// })
    
//   } catch (err) {
//     console.log(err);
//   }
// }

//read2();
// --------other's attempt
let result1=null;
let result2=null;
let data1=fs.readFile("../demo.txt", "utf-8", function(err, data1){
    if(err) return console.log(err);
    //return data1;
    result1 = data1;
})//wrong this return will return at function(err, data)

let data2=fs.readFile("../demo.txt", "utf-8", function(err, data2){
    if(err) return console.log(err);
   // return data2;
    result2 = data2;
})

// correction of above )other's attempt
fs.readFile("../demo.txt", "utf-8", function(err, data1){
    if(err) return console.log(err);
   fs.readFile("../demo2.txt", "utf-8", function(err, data2){
        if(err) return console.log(err);
        fs.writeFile("../output.txt", data1 + data2, function(err) {
            if(err) return console.log("Error writing file:", err);
            console.log("Files read and written successfully");
        })
    }
})

