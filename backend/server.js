const express = require('express')
const app = express()
const port = 4000

const {download}=require('./controller/download')
app.use(express.json());



app.use('/download',require('./routes/downloadroute'))
app.get('/download',(req,res)=>{
  res.send("in /download route")
})
app.get('/',(req,res)=>{
  res.send("hello world")
})



// app.get('/getplaylistinfo',async(req,res)=>{
 

//   const firstResultBatch = await ytpl('https://youtube.com/playlist?list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw', { pages: 1 });
//   const secondResultBatch = ytpl.continueReq(firstResultBatch.continuation);
//   const thirdResultBatch = ytpl.continueReq(secondResultBatch.continuation);
  
//   // You can now use the .items property of all result batches e.g.:
//   console.log(firstResultBatch.items);
//   console.log(secondResultBatch.items);
//   console.log(thirdResultBatch.items);
    
//   res.send("hello world")
// })




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})