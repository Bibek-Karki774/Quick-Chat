const mongoose = require("mongoose")

async function connectDB(){
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB connection created successfully")
    } catch(error) {
        console.log("Error occured while creating a connection", error.message)
    }
}

module.export = connectDB;