const mongoose=require("mongoose");
const TechSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:
    {
        type:Number,
        required:true 
    },
    email:{
        type:String,
        required:true 
    }, 
    dept:{
        type:String,
        required:true 
    }

})
const Techer=mongoose.model("Techer",TechSchema);
module.exports=Techer;