const express = require("express");
const router =express.Router();
const User = require('../model/user');
const ErrorResponse = require('../utils/errorResponse');

const {protected} = require('../middleware/auth');
const LoginInput = require("../validator/login");
const SignupInput=require('../validator/register');
router.post("/register",async (req,res,next) => {
    const {errors, isValid} = SignupInput(req.body);

    if (!isValid) {
       return res.status(400).json(errors);
    }
    const {username,password,text} = req.body;
    try {
        const user = await User.create({
            username,
            password,
            text
        });
       sendToken(user, 200, res);
    }
    catch (error) {
        next(error)
    }
});


router.post("/login", async (req,res,next) =>{
  const {errors, isValid} = LoginInput(req.body);

  if (!isValid) {
     return res.status(400).json(errors);
  }

    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username }).select("+password");
  
      if (!user) {
        return next(new ErrorResponse("Invalid Credentails", 400));
      }
  
      const isMatch = await user.matchPassword(password);
  
      if (!isMatch) {
        return next(new ErrorResponse("Invalid Credentails", 400));
      }
      sendToken(user, 200, res);
  
    } catch (error) {
            next(error)
    }
});


router.get("/private",protected,(req,res) => {
    res.status(200).json({success:true,user:"Hello"})
})


const sendToken = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    res.status(statusCode).json({ sucess: true, token,user });
  };

module.exports = router;