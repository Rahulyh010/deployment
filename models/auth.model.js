

const mongoose= require("mongoose")


//user schema;

const userschema= mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    pass:String,
    location:String
})

const notesSchema=mongoose.Schema({
    note:String,
    userId:String

})

const NotesModel=mongoose.model("note",notesSchema)


const Usermodel= mongoose.model("user",userschema)


module.exports={
    Usermodel,
    NotesModel
}
