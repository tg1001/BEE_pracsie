const express=require("express");
const app=express();
app.use(express.static(__dirname +"/public"));
app.use(express.urlencoded({extended:true}))
app.use(express.json());


app.post("/blog", (req,res)=>{
    console.log(req.body)
    let tittle=req.body.title;
    let desc=req.body.desc;
    console.log(tittle, desc);
    res.json({
        success:true,
        message:"blog added"
    })
})
app.listen(3300, ()=>{console.log("server started")})