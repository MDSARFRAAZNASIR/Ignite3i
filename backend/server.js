const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const dbConnect = require("./db/dbConnect");
const Job=require("./db/jobSchema")
app.use(cors());
app.use(express.json());
dotenv.config();

// database
dbConnect();
// connectToMongoDB();

 
// adding for live
app.use(cors({
  origin: [
    "http://localhost:3000", // local testing
    "https://ignite3i-frontend.vercel.app", // your deployed domain
    "https://ignite3i.vercel.app" // if frontend lives here instead
  ],
}));


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
app.get("/joblist", (req, res) => {
  res.json([{ title: "Backend test working ✅" }]);
});

app.get("/joblist", async (req, res)=>{
    let jobList= await Job.find();
    if (jobList.length>0){
        res.json(jobList);
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