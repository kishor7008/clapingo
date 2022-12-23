const express = require("express");
const {protect}=require('../middlewares/authMiddleware')
const {authController,
    registerUser,getProfile}=require('../controllers/userController')


const router = express.Router();

//user registration
router.route("/").post(registerUser);

//post email and password auth
router.post("/login", authController);
// get profile details
router.route("/profile").get(protect,getProfile);

module.exports = router;
