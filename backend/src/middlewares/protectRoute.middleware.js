const { verifyToken } = require("../utils/jwt");
const User = require("../models/user.model.js")

async function protectRoute(req, res, next){
    const token = req.cookies.token
    if(!token){
        console.log("Unauthorized access - No any token provided");
        return res.status(401).json({message: "Unauthorized access - No any token provided"})
    }

    const decoded = verifyToken(token);
    if(!isValidToken){
        console.log("Unauthorized access - token is not valid");
        return res.status(401).json({message: "Unauthorized access - token is not valid"})
    }

    // If the token is valid
    const user = await User.findById(decoded.id).select("-password")
    req.user = user

    next()
}


module.exports = {
    protectRoute
}