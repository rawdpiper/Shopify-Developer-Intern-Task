const mongoose = require("mongoose")
const dotenv = require('dotenv')

dotenv.config()

const db = process.env.MONGO_URI_DEV


const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            dbName: "Inventory",
            useUnifiedTopology: true,
        });
        console.log("Mongo DB connected");
    } catch (e) {
        console.log(e.message);
        process.exit(1); // we exit the process with a failure code 1;
    }
};

module.exports = connectDB;