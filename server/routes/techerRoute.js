const express = require("express");
const {addTecher,techers}=require('../controllers/techerController')

const router = express.Router();



//craete new teacher
router.route("/").post( addTecher);
// get teacher list
router.route("/list").get( techers);



module.exports = router;
