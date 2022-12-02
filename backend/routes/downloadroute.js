const {getinfo,downloadAudio,downloadVideo}=require("../controller/download")
const express=require("express")
const router=express.Router()


router.post('/getinfo',getinfo)
router.post('/downloadAudio',downloadAudio)
router.post('/downloadVideo',downloadVideo)


module.exports=router