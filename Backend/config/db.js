const mongoose = require('mongoose');
import dot from 'dotenv';
const colors = require('colors');
import {MongoMemoryServer} from 'mongodb-memory-server';
const db = ""
dot.config( {path: '../.env'});
const connectDB = async () => {
    try{
        const mongod = new MongoMemoryServer.create();
        await mongoose.connect(db)
        console.log(`MongoDB Connected: ${mongoose.connection.host}`.cyan.underline.bold);
    } catch (error){
        console.log(`Error: ${error.message}`.red.underline.bold);
       
    }
}

module.exports = connectDB;
