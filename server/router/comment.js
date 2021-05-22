const { request } = require('express');
const express = require('express');
const router = express.Router();
const Comment = require('../model/comment');
const {protected} =require('../middleware/auth')
router.post('/saveComment',protected,async (req,res) => {
    console.log(req.body)
    const comment = new Comment(req.body)
    try {
        comment.save((err, comment) => {
            console.log(err)
            if (err) return res.json({ success: false, err })
    
            Comment.find({ '_id': comment._id })
                .populate('writer')
                .exec((err, result) => {
                    if (err) return res.json({ success: false, err })
                    return res.status(200).json({ success: true, result })
                })
        })
    
    }
    catch (error) {
        console.log(error);
    }
   
})
router.post('/getComments',async (req,res) => {

    try{
        Comment.find({ "postId": req.body.postId })
        .populate('writer')
        .exec((err, comments) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, comments })
        });
    }
    catch (error)
    {
        console.log(error);
    }
})

module.exports = router;
