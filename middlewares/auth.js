const jwt= require("jsonwebtoken")

const auth=(req,res,next)=>{

 let token = req.headers.authorization

 //console.log(token)

  if(token){
    const decoded= jwt.verify(token,"siat")


  
    if(decoded){
    //  console.log(decoded)
      req.body.userId=decoded.userId

      next()
    }else{
      res.status(400).send({"msg":"Please login First"})
    }
    
  }else{
    res.status(400).send({"msg":"Please Login First"})
  }
}


module.exports={
  auth
}