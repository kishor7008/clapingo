const express = require("express");
const {
  addFavo,getData,deleteItem
} = require("../controllers/favoriteController");


const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

// add follow teacher
router.route("/").post(protect, addFavo);
// get all follow teacher
router.route("/data").get(protect, getData);
// delete teacher from followed list
router.route("/delete").post(protect, deleteItem);


module.exports = router;
