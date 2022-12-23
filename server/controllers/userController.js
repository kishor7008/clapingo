const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name,number, email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User Already Exists!");
  }

  const user = await User.create({ name,number,email, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      number:user.number,
      email: user.email,
      
      token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

const authController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      number:user.number,
      email: user.email,
      
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const getProfile=asyncHandler(async(req,res)=>{
  const response=await User.find({_id:req.user._id})
  res.json(response)
})

module.exports = {
  authController,
  registerUser,
  getProfile
};
