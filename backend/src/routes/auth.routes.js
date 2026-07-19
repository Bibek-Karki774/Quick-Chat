const express = require("express")
const {signup, login, logout} = require("../controllers/auth.controller.js")
const {checkAuth} = require("../controllers/auth.controller.js")
const {protectRoute} = require("../middlewares/protectRoute.middleware.js")

const router = express.Router()

router.post("/signup", signup)

router.post("/login", login)

router.post("/logout", logout)

router.get("/check", protectRoute, checkAuth)

module.exports = router;