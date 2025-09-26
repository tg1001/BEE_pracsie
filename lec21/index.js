//authentication and authorization
//auth - user valid or not
//auth req valid or not
const express =require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./model/users");
const jwt = require("jsonwebtoken");
console.log(User);
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

function islogin(req,res,next){
    let token=req.headers.authorization
    console.log(token);
    if(!token){
        return res.json({
            success:false,
            message:"Unauthorized user no token"
        })
    }
    let decode=jwt.verify(token,"maouo")
        console.log(decode);
         req.user=decode.user
    next()

    // try{
        
    //     //next()
    // }
    // catch(error){
    //     return res.json({
    //         success:false,
    //         message:"Invalid token"
    //     })
    // }
   
}
app.get("/home",islogin,(req,res)=>{
    //console.log(req.user)
    let username=req.user.name;
    res.json({
        success:true,
        message:"welcome to home page  " + username
    })
})
app.get("/health",(req,res)=>{
    res.json({
        status:"ok",
        message:"server running ok"
    })
})

app.post("/api/users/signup",async(req,res)=>{

try{let { name, email, password } = req.body;
    let userExist = await User.findOne({email:email})
    if(userExist){
        return res.json({
            sucess:false,
            message:"User already exists"
        })    }

    let newUser = new User({
        name: name,
        email: email,
        password: password
    })
    await newUser.save();
    res.json({
        success: true,
        message: "User Registered Successfully",
    })

    }
    catch(error){
        console.log(error.message);
        res.json({
            error:{
                message: error.message
            }
        })
    }
})
app.post("/api/auth/login", async(req,res)=>{
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa")
    try{const { email, password } = req.body;
    let userExist= await User.findOne({email:email})
    if(!userExist){
        return res.json({
            success: false,
            message: "User does not exist"
        })
    }
    if(userExist.password !== password){
        return res.json({
            success: false,
            message: "Invalid Password"
        })
    }

    if(userExist.password === password){
        let token=jwt.sign({"user":userExist},"maouo")
        
        return res.json({
            success: true,
            message: "Login Successful",
            token:token
        })
        console.log(token);
        
    }}
    catch(error){
        console.log(error.message);
        res.json({
            error:{
                message: error.message
            }
        })
    }
})










app.listen(5545, () => {
    console.log("Server started abi")
})
mongoose.connect('mongodb://127.0.0.1:27017/bloglogin')
    .then(() => console.log("Connected!"));