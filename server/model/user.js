const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
    select: false,
  },
  text:{
      type:String
  }

});

UserSchema.pre("save", async function (next) {

  const salt = await bcrypt.genSalt(11);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedJwtToken = function () {
  console.log(process.env.JWT_SECRET);
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};


const User = mongoose.model('User', UserSchema);

module.exports = User;