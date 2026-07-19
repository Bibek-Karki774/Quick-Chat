const express = require("express")
const {getMessages, sendMessage} = require("../controllers/msg.controller")
const {protectRoute} = require("../middlewares/protectRoute.middleware.js")

const router = express.Router()

router.get("/:id", protectRoute, getMessages)
router.post("/send/:id", protectRoute, sendMessage)


module.exports = router;