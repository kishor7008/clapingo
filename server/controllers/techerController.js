const asyncHandler = require("express-async-handler");
const Techer=require("../models/techerModel")
const addTecher=async(req,res)=>{
    const response=new Techer(req.body);
    await response.save();
     res.json(response)
}

const techers=async(req,res)=>{
    const response =await Techer.find();
    res.json(response)
}
module.exports={addTecher,techers};