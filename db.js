const mongoose= require("mongoose")



const connection= mongoose.connect(`mongodb+srv://rahulyh63:ram@cluster0.fvlvkrr.mongodb.net/auth?retryWrites=true&w=majority`)



module.exports={
    connection
}