var express = require("express");
var router = express.Router()
router.route("/")
.get((req,res)=>{
res.send('hello from express')
})
module.exports = router