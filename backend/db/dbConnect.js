const mongoose = require("mongoose")
const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URL)
        console.log(`Database connect: ${conn.connection.host}`)

    } catch (error) {
        console.error(`Database connect error: ${error.message}`)
        process.exit(1);


    }
}
module.exports = dbConnect;