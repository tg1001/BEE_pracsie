const express=require("express");
const app=express();
const {m1, m2}=require("./Middleware/mw1.js");
const {m3, m4}=require("./Middleware/pathlevel.js");

app.use(express.static(__dirname+"/public"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(m1)

const userRouter=require("./routes/userRoutes");
///////////////////////////////////////
app.use("/api/users", userRouter)
////////////////////////////////////////
app.get("/health",m3,(req,res,next)=>{
    console.log("runnin controller func");
    next()
    res.json({status:"ok",
        message:"server runnning ok"
    })
  //  console.log("after 1mw");  
    //  console.log("after response");  
})
app.get("/home",(req,res,next)=>{
  console.log("running home end point")
  res.json({
    status:"ok",
    message:"server running ok"
  })
  
})
app.use(m2)
//next or retuen is not same.//
//nites: middlewear funv mpv breakdown
app.listen(5775,()=>console.log("server started"));
