const mongoose=require('mongoose')

const connectDB=async()=>{
    console.log("db connected")
    try{
    return mongoose.connect("mongodb+srv://kishor7008:kishor7008@cluster0.7vbcfnp.mongodb.net/?retryWrites=true&w=majority")
    console.log("db connected")
    
}
catch{
    console.log('not connected')
}
}
module.exports=connectDB;