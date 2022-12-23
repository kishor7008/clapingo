const mongoose = require("mongoose");
const User=require("./userModel")
const fevoSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    favorite:[
      {name:{
        type:String,
        required:true,
        unique:true,
      }
            
        }
    ]
    
  },
  { timestamps: true }
);

const Favo = mongoose.model("Fevo", fevoSchema);

module.exports = Favo;
