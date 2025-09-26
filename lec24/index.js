//mongodb return and saves data in JSON Binary JSON
//mongoose is odm, to connect our server with mongodb

//26 AUG
//CREATE A LOGIN ROUTE AND GENERATE jwt tokem with payload
//userid=user

//task step2
//in route post/blog ass middleware is Login, in this middleware verify jwt tokenand 
//modify req object like req.userid=decode.user
//controller function mai id 
const express = require("express")
const mongoose = require("mongoose")
const app = express();
const Blogs = require("./model/blog");
const Users = require("./model/user");
// const User = require("./model/users");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname+ "/public"))

///////////middlewear func
function islogin(req,res,next){
    let token=req.headers.authorization
    if(!req.headers.authorization){
        return res.json({
            success:false,
            message:"no auth"
        })
    }
    console.log(token);
    if(!token){
        return res.json({
            success:false,
            message:"Unauthorized user no token"
        })
    }
    let decode=jwt.verify(token,"maouo")
    if(!decode){
        return res.json({
            sucess:false,
            message:"invalid token"
        })
    }
        console.log(decode);
        //req ko modify krna h taki next middleware ...we wanna send agay
         req.userId=decode.userId
    next()

}

app.post("/blogs",islogin,async (req, res) => {
 let { title, body } = req.body 
  //upr req.body m nhi mildea req.body 
  let userId=req.userId
    let userExist = await Users.findById(userId);
    if (userExist) {
    // console.log(title, body);
    // res.send("Got it")
        let newBlog = new Blogs({
            title: title,
            body: body,
            date: Date.now(),
            userId: userId
        })
        await newBlog.save()
        userExist.blogs.push(newBlog._id)
        await userExist.save();
        res.json({
            success: true,
            data: newBlog,
            message: "Blog added successfully"
        })
    }
})

app.post("/users", async(req, res)=>{
    let {email, username, password} = req.body

    let newUser = new Users({
        email: email,
        username: username,
        password: password
    })
    await newUser.save();
    res.json({
        success: true,
        data: newUser,
        message: "User added successfully"
    })
})

app.get("/blogs", async (req, res)=>{
    let allblog = await Blogs.find();  // returns all data
    res.json({
        success: true,
        data: allblog
    })
})

app.get("/blogs/:id", async (req, res)=>{
    let {id} = req.params
    let blog = await Blogs.findOne({_id:id});
    res.json({
        success: true,
        data: blog
    })
})

app.get("/users", async(req, res)=>{
    let allUsers = await Users.find();
    res.json({
        success: true,
        data: allUsers
    })
})

app.get("/users/:id", async(req, res)=>{
    let {id} = req.params
    let userExist = await Users.findOne({_id:id}).populate("blogs");
    if (userExist) {
        res.json({
            success: true,
            data: userExist
        })
    }
})


//delte nlog
// app.delete("/blogs/:blogId", isLogin,async(req,res)=>{
//     let {blogId}=req.params;
//    console.log(blogId);
//     let {userId}=req.userId;
//     let blogExist = await Blogs.findById(blogId);
//     console.log(blogExist);
//     if(!blogExist) return res.json({
//         success: false,
//         message: "Blog not found"
//     })
//     if(blogExist.userId!=userId) return res.json({
//         success: false,
//         message: "You are not authorized to delete this blog"
//     })
//     await Blogs.findByIdAndDelete(blogId);
//     //userExist
//     let userExists=await Users.findById(userId);
//     let blog=userExists.blogs.filter((id)=> id!=blogId);
//     userExists.blogs=blog;
//     await userExists.save();
//     res.json({
//         success: true,
//         message: "Blog deleted successfully",
//         data: userExists
//     })
// })
//blog update api

app.put("/blogs/:blogId", async(req,res)=>{
    let {blogId}=req.params;
    let {userId, title, body}=req.body;    
    let blogExist = await Blogs.findById(blogId);
    console.log("blog findByid");
    console.log(blogExist);
    console.log(blogId);
    console.log(title);
    if(!blogExist) return res.json({
        success: false,
        message: "Blog not found"
    })
    console.log("userId", userId);
    if(blogExist.userId==userId) 
        console.log("userId in the loop", userId);
        return res.json({
        success: false,
        message: "You are not allowed"
    })
    // blogExist.title=title;
    // blogExist.body=body;
    // await blogExist.save();
    //  console.log(title);
    // console.log(body);
    // console.log(blogExist);
    // res.json({
    //     success: true,
    //     message: "Blog updated",
    //     data: blogExist
    // })
})
//login
app.post("/api/login", async(req,res)=>
{
    try{
        const { email, password}=req.body;
       // let userExist=await user.findOne({email:email})
        let userExist = await User.findOne({ email: email });

        if(userExist)
        {
            return res.json({
                success:false,
                message:"user exist"
            })
        }
        if(userExist.password !== password)
        {
              return res.json({
                success:false,
                message:"incooo pass"
            })

        }
        if(userExist.password == password)
        {
            let token=jwt.sign({"user":userExist._id},"maouo")
            return res.json({
                success:true,
                message:"success login",
                token:token
            })
        }
       
    }
        catch(error)
        {
            console.log(error.message);
        res.json({
            error:{
                message: error.message
            }
        })
    }
    
    
})

app.get("/home",islogin,(req,res)=>{
    //console.log(req.user)
    let username=req.user.name;
    res.json({
        success:true,
        message:"welcome to home page  " + username
    })
})

// app.post("/likes",islogin,async(req,res)=>{
//     try{

//         let {blogId}=req.body;
//         let blogExist=await Blogs.findById(blogId);
//         if(!blogExist){
//             return res.json({
//                 success:false,
//                 message:"Blog does not exist"
//             })
//         }
//        // blogExist.like=like+1;
//         await blogExist.save();

//     }
//     catch(error){
//         console.log(error.message);
//         res.json({
//             error:{
//                 message: error.message
//             }
//         })
//     }
// })


app.listen(4445, () => {
    console.log("Server started")
})

mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
    .then(() => console.log("Connected!"));

// make user Schema, email, username, password
// add user route, all user get, single user get /users

