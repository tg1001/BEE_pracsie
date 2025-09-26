const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = require('./user.js');


const BlogPost = new Schema({
  title: String,
  body: String,
  date: Date,
  userId:{
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  like:{
    type:Number,
    default:0
  }
});
module.exports = mongoose.model('Blog', BlogPost);