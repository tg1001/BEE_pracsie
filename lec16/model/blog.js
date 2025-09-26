const mongoose = require('mongoose');
const schema = mongoose.Schema;
// const ObjectId = schema.ObjectId;
const blogpost = new schema({
    title:String,
    body:String,
    date:Date,
    userid:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    }
});
module.exports=mongoose.model('blog', blogpost);