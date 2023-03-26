const express= require("express")
const { connection } = require("./db")
const { notesRoute } = require("./routes/notes")
const { userRoute } = require("./routes/userRoutes")
const cors= require("cors")

const app= express()

app.use(express.json())

app.use(cors())

app.use("/user",userRoute)

app.use("/notes",notesRoute)



app.listen(4500,async()=>{

    try {
        await connection
        console.log("connected to mongosh")
    } catch (error) {
       console.log(error) 
    }
    console.log("connected")
})