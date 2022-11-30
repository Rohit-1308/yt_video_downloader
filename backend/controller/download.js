
const ytdl = require('ytdl-core');

const getinfo=(req,res)=>{
  const {link,resType}=req.body



  res.send({link,resType})
  // res.json({"name":"rohit k"})
}


module.exports=getinfo