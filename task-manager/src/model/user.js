const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("invalid Enail");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("this age is not eligible");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 6,
    validate(value) {
      if (value.includes("password")) {
        throw new Error("invalid password");
      }
    },
  },
  tokens:[{
    token:{
      type:String,
      required:true,
    }

  }]
});
userSchema.methods.generateToken=async function(){
  let user=this;
  let token = jwt.sign({_id:user._id},'secretkey',{expiresIn:"1000"});
  user.tokens= user.tokens.concat({token});
  await user.save();
  return token;
}

userSchema.statics.findByCredentials  = async(email,password)=>{
let user =await User.findOne({email});
if(!user){
  throw new Error("Unable to login");
}
let isMatch = await bcrypt.compareSync(password,user.password);
if(!isMatch){
  throw new Error("Unable to login");
}
return user;
}
userSchema.pre("save", function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = bcrypt.hashSync(user.password, 8);
  }
  console.log(`before saving`);
  next();
});
const User = mongoose.model("User", userSchema);

module.exports = User;
