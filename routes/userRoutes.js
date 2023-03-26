const express= require("express")
const { Usermodel } = require("../models/auth.model")
var jwt = require('jsonwebtoken');
const bcrypt=require("bcrypt");
const { auth } = require("../middlewares/auth");


const userRoute= express.Router()


userRoute.get('/',async(req,res)=>{

    const data= await Usermodel.find()

    res.send(data)

})

userRoute.post("/register",async(req,res)=>{

    const {name,age,pass,location,email}=req.body
    
bcrypt.hash(pass, 5,async function(err, hash) {
    // Store hash in your password DB.
    const newuser= new Usermodel({name,age,pass:hash,location,email})

    await newuser.save()
    
    res.send("Register has been done!")
});

   


})

userRoute.post("/login",async(req,res)=>{
 //const pass= req.headers("Authorization")
 //pass= req.headers().authorization

 const {email,pass}=req.body

//console.log(pass)
 try {
    const user= await Usermodel.find({email:email})
    console.log(user)
    if(user.length>0){
        bcrypt.compare(pass,user[0].pass,(err,result)=>{
            if(result){
                console.log(user[0]._id)
        res.status(200).send({"msg":"Succesfull","token":jwt.sign({"userId":user[0]._id},"siat")})
            }else{
                res.status(400).send("invalid email or password")
            }
        })
        
    }
   
 } catch (error) {
    res.status(400).send("unsuccessfull")
 }

})

userRoute.get("/details",auth,async(req,res)=>{
    //const {token}=req.query;
    res.send({"msg":"details"})
})



module.exports={
    userRoute
}

