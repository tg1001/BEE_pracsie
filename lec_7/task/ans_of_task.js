const fs = require("fs");
//we not using readFileSync 

//multiple async func ko sync func s chlan h only 2 methongs
//call back & promise
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