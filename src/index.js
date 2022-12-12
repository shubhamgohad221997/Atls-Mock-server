const express = require("express")
const mongoose = require("mongoose")
const User = require("../Models/user.model")
const cors = require("cors")
const connect = require("../Connect/Connect")
const req = require("express/lib/request")
const PORT = process.env.PORT || 8000
mongoose.set('strictQuery', true)
const app = express()

app.use(express.json())

app.use(cors())

app.get("/",async(req,res)=>{
    res.status(200).send("Hello Welcome to my app")
})

app.get("/user",async(req,res)=>{
    let user = await User.find()
    res.status(200).send({message:"successfully get",data:user})
})

app.post("/",async(req,res)=>{
    const user = req.body
    console.log(user)
    const data = await User.create(user)
    res.status(200).send({message:"data added successfully",data:data})
})

app.listen(PORT, async () => {
    await connect()
    console.log(`Database Connected and app listening on port ${PORT}`)
})