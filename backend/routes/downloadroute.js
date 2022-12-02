const {getinfo,downloadaudio,downloadVideo}=require("../controller/download")
const express=require("express")
const router=express.Router()


router.post('/getinfo',getinfo)
router.post('/downloadaudio',downloadaudio)
router.post('/downloadVideo',downloadVideo)


module.exports=router