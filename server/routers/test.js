var express = require("express");
var router = express.Router()
router.route("/")
.get((req,res)=>{
    res.json({message:'express is working'})
})

module.exports = router