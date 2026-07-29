const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected: ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}
module.exports = connectDB;
