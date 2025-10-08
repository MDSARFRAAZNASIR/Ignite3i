const mongoose = require("mongoose")
// const dbConnect = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.DATABASE_URL)
//         console.log(`Database connect: ${conn.connection.host}`)

//     } catch (error) {
//         console.error(`Database connect error: ${error.message}`)
//         process.exit(1);


//     }
// }
// module.exports = dbConnect;
let isConnected=false;
async function connctToMongoDB(){
    try {
        await mongoose.connect(process.env.DATABASE_URL,{
              useNewUrlParser:true,
        useUnifiedTopology:false

        })
        isConnected=true;
        console.log("Connected to MongoDb");


       
      
        


    } catch (error) {
        console.error("Error Connecte tothe mongodb", error)
        
    }
}

// add middleware
app.use((req, res, next)=>{
    if (!isConnected){
        connctToMongoDB();
    }
    next();
})