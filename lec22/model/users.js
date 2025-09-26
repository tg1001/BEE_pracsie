const mongoose=require("mongoose");

const usersSchema=new mongoose.Schema({
    name: {
        type: String,   
        required: true,
    },
    email: {
        
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    blog_count:{
        type: Number,
        default: 0
    },
    blogs:[{
        type:mongoose.Types.ObjectId,
       ref: "Blog"  // Reference to the Blog model

    }],
    createdAt: {
        type: Date,
        default: Date.now
    }

})
module.exports=mongoose.model("User", usersSchema);