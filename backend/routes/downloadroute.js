const getinfo=require("../controller/download")
const express=require("express")
const router=express.Router()


router.post('/getinfo',getinfo)


module.exports=router