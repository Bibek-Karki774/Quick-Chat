const express = require("express")
const {updateProfile} = require("../controllers/user.controller.js")
const { protectRoute } = require("../middlewares/protectRoute.middleware.js")

const router = express.Router()

router.put("/updateProfile", protectRoute, updateProfile )

module.exports = router