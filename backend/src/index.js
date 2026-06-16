const express = require("express")
const dotenv = require("dotenv")
const authRoutes = require("./routes/auth.routes")

  
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

// Built in middleware to read json
app.use(express.json())

// Defining routes  
app.use("/api/auth", authRoutes)

app.listen("5000", ()=>{
    console.log(`Server listening at ${PORT}`)
})