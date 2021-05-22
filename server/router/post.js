const express = require('express');
const router = express.Router();
const Post = require('../model/post');
const {protected} = require('../middleware/auth');
const User = require('../model/user');
router.post('/savePost',protected,(req,res) => {
    console.log(req.headers)
    const {message,tag} = req.body;
    console.log(req.user)
   const user = new Post({
       username:req.user.username,
       text:message,
       tag,
       postedBy:req.user._id
   });
   user.save()
   .then(users => res.status(200).json({success:true,users}))
   .catch (err => console.log(err))
})

router.get('/getPost',(req,res) => {
    Post.find({}).sort({_id:-1})
    .exec((err,user) => {
        if (err) return res.status(400).send(err);
        console.log(user);
        return res.status(200).json({ success: true,user})
    })
});

router.post('/search',(req,res)=>{
    const {college} = req.body;
    console.log(req.body)
    Post.find({tag:college}).sort({_id:-1})
    .exec((err,user)=>{
        if (err) return res.status(400).send(err);
        return res.status(200).json({ success: true,user})
    })
})

router.put('/like',protected,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.status(200).json({success:true,result})

        }
    })
})
router.put('/unlike',protected,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.status(200).json({success:true,result})
        }
    })
})

router.post('/myProfile',(req,res)=>{
    
    Post.find({postedBy:req.body.auth})
    .exec((err,post)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            User.find({_id: req.body.auth})
            .exec((err,user)=>{
            if(err){
                return res.status(422).json({error:err})
            }
            else res.status(200).json({success:true,user,post})
        })
        }
    })

})

module.exports = router;