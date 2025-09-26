const mogoose=require('mongoose');
const schema = mogoose.Schema;
const userSchema = new schema({
    email: String,
    uname:{ type:String,require:true},
    password: String,
    blogs:[{
        type:mongoose.Types.ObjectId,
        ref: 'blog'
    }]
});
module.exports = mogoose.model('user', userSchema);