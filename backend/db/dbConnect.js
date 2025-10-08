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

// for vercel 


let isConnected = false;

async function dbConnect() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
  }
}

module.exports = dbConnect;
