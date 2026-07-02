const express = require("express")
const dotenv = require("dotenv").config()
const authRoutes = require("./routes/auth.routes")
const userRoutes = require("./routes/user.routes.js")
const connectDB = require("./config/db.js");
const cookieParser = require("cookie-parser");
const dns = require("dns")

// Change the DNS
dns.setServers(["1.1.1.1", "8.8.8.8"])


const app = express()
const PORT = process.env.PORT || 5000

connectDB();

app.use(express.json())
app.use(cookieParser());

// Defining routes  
app.get("/", (req,res)=>{
    res.send("This is homepage.")
})

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/message", msgRoutes)

app.listen("5000", ()=>{
    console.log(`Server listening at ${PORT}`)
})