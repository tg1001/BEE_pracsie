const express = require("express");
const router = express.Router();//let router be a small application
//app.get -> router.get

const blogs= require("../model/blog");
const {postaddBlog,getreadBlogs,getoneBlog,deleteOneBlog}=require("../controller/blogController")
router.post("/", postaddBlog);
router.get("/", getreadBlogs);
router.get("/:id", getoneBlog); 
router.delete("/:blogId", deleteOneBlog);


module.exports = router;