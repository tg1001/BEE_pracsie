//const fs=require("fs");

// fs.readFile("../users.txt", "utf-8", function(err, data) {
//     if (err) return console.log(err);
//     let users1 = JSON.parse(data);
//         // console.log(users[0].name);
//     //console.log(data[0]);
//     fs.readFile("../users.txt", "utf-8", function(err, data2) {
//         if (err) return console.log(err);
//         let users2 = JSON.parse(data2);
//         //console.log(data[0]);
//         fs.writeFile("../users.txt",JSON.stringify(users),function(err){
//             if(err) return console.log(err);
//             console.log("users saved successfully!");
//         })
//         // let users = JSON.parse(data);
//         // console.log(users[0].name);
//     })
    
// })

/////==-------correct (gemini aided) attempt

const fs = require("fs");

fs.readFile("../users.txt", "utf-8", function(err, data1) {
    if (err) return console.error(err);
    let users1 = JSON.parse(data1);

    fs.readFile("../users2.txt", "utf-8", function(err, data2) {
        if (err) return console.error(err);
        let users2 = JSON.parse(data2);
       // const users1_2 = [...users1, ...users2];
       const users1_2 = users1.concat(users2);

        fs.writeFile("../combined_users.txt", JSON.stringify(users1_2), function(err) {
            if (err) return console.error(err);
            console.log("file with user 12 written");
        });
    });
});



