let users=[
    {
        name:"Nitiesh",
        age:"24",
        add:"delhi"
    },
    {
        name:"cat",
        age:"20",
        add:"uk"
    }
]
// const fs=require("fs");
// fs.writeFile("../users.txt",users.toString(),function(err){
//     if(err) return console.log(err);
//     console.log("users saved successfully!");
// })

//------------------json (prev does not show obj data)-------------------
//to deal with a objedct we have json java script object notation
//we can convert an object to json using JSON.stringify
const fs=require("fs");
fs.writeFile("../users.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err);
    console.log("users saved successfully!");
})
