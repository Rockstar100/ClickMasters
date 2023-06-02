const mongoose = require('mongoose');
const colors = require('colors');

const bookingSchema = new mongoose.Schema({
    userId: {
        type: String,
        required : true,
    },
    cameramanId: {
        type: String,
        required : true,
    },
    cameramanInfo: {
        type: Object,
        required : true,
    },
    userInfo: {
        type: Object,
        required : true,
    },
    startdate: {
        type: String,
        
    },
    enddate: {
        type: String,
    },
    eventType: {
        type: String,
        required : true,
    },
    Address: {
        type: String,
    },
    status: {
        type: String,
        required : true,
        default: "pending",
    },
    time: {
        type: String,
       
    },


}, { timestamps: true });   

const bookingModel = mongoose.model('bookings', bookingSchema);
module.exports = bookingModel;