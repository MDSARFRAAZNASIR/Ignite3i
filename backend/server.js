const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const dbConnect = require("./db/dbConnect");
const Job=require("./db/jobSchema")
app.use(express.json());
dotenv.config();
app.use(cors());
// database
dbConnect();
// connectToMongoDB();

// apis
// ✅ Health check
app.get("/", (req, res) => res.send("API is running successfully ✅"));

// app.post("/", (req, res) => {
//     res.send("Api in progress");
// })
 //api for job post
app.post("/jobcreate", async (req, res)=>{
    let job=new Job(req.body);
    let result= await job.save();
    res.send(result)
    res.send("Succesfull log in")
   
})
//api for job view
app.get("/joblist", async (req, res)=>{
    let jobList= await Job.find();
    if (jobList.length>0){
        res.send(jobList);
    }else{
        res.send("No Job Found")
    }


})

//  for local server
// const PORT = process.env.PORT || 4500;
// //  Run Listen

// app.listen(PORT, () => {
//     console.log(`server run on : ${process.env.NODE_ENV} port on ${PORT} `)
// })

// do not use app.listen in vercel
// for the vercel
module.exports=app