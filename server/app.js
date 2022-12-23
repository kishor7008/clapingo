const express = require('express')
const userRoutes=require("./routes/userRoute")
const dotenv=require('dotenv')
const Favo=require('./models/favoriteModel')
const connectDB=require('./config/config')
const favoRoute=require("./routes/favoRoute")
const techerRoute=require('./routes/techerRoute')
dotenv.config();
const cors=require('cors')
const app=express()
app.use(express.json())
connectDB()
app.use(cors())
app.get('/',(req,res)=>{
    res.send('<h1>welcome</h1>')
})
app.use("/user",userRoutes)
app.use("/add",favoRoute)
app.use("/techer",techerRoute)

app.get("/techerfavorite",async(req,res)=>{
let response=await Favo.find();
 let favorite=  response.map((item)=>item.favorite)
let favoriteList=favorite.map((item)=>item)

res.json(favoriteList)
})





const PORT=8080
app.listen(process.env.PORT || PORT,()=>{
    console.log(`server started ` )
})