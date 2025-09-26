const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const blog=require('./model/blog');
app.post("/blogs",async (req, res) => {
    // Logic to create a new blog post
    let { title, body } = req.body;
    let newBlog = new blog({
        title: title,
        body: body,
        date: new Date()
    });
   await newBlog.save()
   res.json({
    sucess: true,
    data:newBlog,
    message: "Blog post created successfully"
   })
    
})

app.post("/blog", (req,res) => {
    // Logic to create a new blog post
    let {title,body} = req.body;
    console.log(title, body);
    res.send("Got it")
})
app.get("/blogs", async(req,res)=>{
    let allblog = await blog.find();
    res.json({
        success: true,
        data: allblog,
        message: "All blog posts retrieved successfully"
    })
})

app.get("/blogs/:id", async(req,res)=>{
    let {id}=req.params;
    let blogs= await blog.findOne({_id:id})
    res.json({
        success: true,
        data: blogs,
        message: "Blog post retrieved thorughh findOne"
    })
})


app.post("/users", async (req, res) => {
    // Logic to create a new user
    let { email,uname, password } = req.body;
    let newUser = new user({
        email: email,
        uname: uname,
        password: password
    });
    await newUser.save();
    res.json({
        success: true,
        data: newUser,
        message: "User created successfully"
    });
});
app.post("/user", (req,res) => {
    
    let {email,uname,password} = req.body;
    console.log(email, uname, password);
    res.send("Got it")
})

app.get("/users", async(req,res)=>{
    let alluser = await user.find();
    res.json({
        success: true,
        data: alluser,
        
    })
})

app.get("/users/:id", async(req,res)=>{
    let {id}=req.params;
    let users= await user.findOne({_id:id})
    res.json({
        success: true,
        data: users,
      
    })
})


app.listen(4445, ()=>{
    console.log('Server is running on port 4445');
})
mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
    .then(() => {
    console.log('Connected to MongoDB');
});
