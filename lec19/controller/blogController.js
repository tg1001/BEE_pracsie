///controller function repsonse bhejta h last m

module.exports.postaddBlog=async (req, res) => {
    let { title, body, userId } = req.body
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
}

module.exports.getreadBlogs= async (req, res)=>{
    let allblog = await Blogs.find();  // returns all data
    res.json({
        success: true,
        data: allblog
    })
}

module.exports.getoneBlog=async (req, res)=>{
    let {id} = req.params
    let blog = await Blogs.findOne({_id:id});
    res.json({
        success: true,
        data: blog
    })
}
module.exports.deleteOneBlog= async(req,res)=>{
    let {blogId}=req.params;
   console.log(blogId);
    let {userId}=req.body;
    let blogExist = await Blogs.findById(blogId);
    console.log(blogExist);
    if(!blogExist) return res.json({
        success: false,
        message: "Blog not found"
    })
    if(blogExist.userId!=userId) return res.json({
        success: false,
        message: "You are not authorized to delete this blog"
    })
    await Blogs.findByIdAndDelete(blogId);
    //userExist
    let userExists=await Users.findById(userId);
    let blog=userExists.blogs.filter((id)=> id!=blogId);
    userExists.blogs=blog;
    await userExists.save();
    res.json({
        success: true,
        message: "Blog deleted successfully",
        data: userExists
    })
}