const express= require("express")
const { auth } = require("../middlewares/auth")
const { NotesModel } = require("../models/auth.model")
const jwt=require("jsonwebtoken")

const notesRoute=express.Router()



notesRoute.get("/",auth,async(req,res)=>{

    const token= req.headers.authorization

    console.log(token)

    const decoded= jwt.verify(token,"siat")

    console.log(decoded.userId)


    const data= await NotesModel.find({userId:decoded.userId})
    console.log(data)
    res.send(data)
})


notesRoute.post("/add",auth,async(req,res)=>{
    const payload= new NotesModel(req.body)
    await payload.save()
    res.send(payload)
})

notesRoute.patch("/update",(req,res)=>{
    
    res.send()
})

notesRoute.delete("/delete",(req,res)=>{
    res.send()

})


module.exports={
    notesRoute
}