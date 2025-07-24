const { isUtf8 } = require("buffer");
const express = require("express");
const app = express();
const fs =require("fs");
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html"); // absolute path
// })


//to send public folder
app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.post("/users", (req,res)=>{
    //username, name
    let username = req.body.username;
    let password = req.body.password;
    res.json({
        username,
        password
    });
    
    //add data to file
    let alluser=[];
    let newuser={username,password}
    fs.readFile("./userdata.json","utf-8",function(err,data){
        if(err) return res.send(err);
        alluser=JSON.parse(data);
        alluser.push(newuser);
        
        fs.writeFile("./userdata.json", JSON.stringify(alluser), function(err){
            if(err) return res.send(err);
            res.send("fuinisjdfisudhfiysdfsd")
        })
    })
})
    app.listen(3000,function() {
    console.log("server started on port 3000");
})