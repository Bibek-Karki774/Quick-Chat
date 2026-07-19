const express = require("express")
const {updateProfile, getUsersForSidebar} = require("../controllers/user.controller.js")
const { protectRoute } = require("../middlewares/protectRoute.middleware.js")

const router = express.Router()

router.put("/updateProfile", protectRoute, updateProfile )
router.get("/", protectRoute, getUsersForSidebar )

module.exports = router