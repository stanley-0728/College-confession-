const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  username:{
    type:String
  },
    text:{
        type:String,
    },
    tag:{
       type: String
    },
  created:{
      type:Number,default:Date.now
  },
  postedBy:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  likes:[{type:Schema.Types.ObjectId,ref:"User"}]
});

const Post = mongoose.model('Post', UserSchema);
  
  module.exports = Post;
