const mongoose = require('mongoose');
const colors = require('colors');

const cameramanSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    name: {
        type: String,
        required: [true, 'Please add a name'],  
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
    },
    password:{
        type: String,
        required: [true, 'Please add a password'],
    },
    phone:{
        type: String,
        // required: [true, 'Please add a phone number'],
    },
    address:{
        type: Object,
        required: [true, 'Please add an address'],
    },
    adharNumber:{
        type: String,
        // required: [true, 'Please add an adhar number'],
    },
    panNumber:{
        type: String,
        // required: [true, 'Please add a pan number'],
    },
    adharFile:{
        type: String,
        // required: [true, 'Please add an adhar file'],
    },
    panFile:{
        type: String,
        // required: [true, 'Please add a pan file'],
    },
    gender:{
        type: Array,
    },

    profilePic:{
        type: String,
    },
    website:{
        type: String,
    },
    socialMedia:{
        type: String,
    },
    about:{
        type: String,
    },
    experience:{
        type: String,
        // required: [true, 'Please add an experience'],
    },
    status:{
        type: String,
        default: 'pending',
    },
    specializations:{
        type: String,
        // required: [true, 'Please add a specialization'],
    },
    price:{
        type: String,
        // required: [true, 'Please add a price'],
    },
    rating:{
        type: String,
        default: '0',
    },
    reviews:{
        type: Array,
        default: [],
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    notification : {
        type: Array,
        default: [],
    },
    CompletedOrder : {
        type: Array,
        default: [],
    },
    RejectedOrder : {
        type: Array,
        default: [],
    },
    PendingOrder : {
        type: Array,
        default: [],
    },
  
   
}, {timestamps: true}
)
const cameramanModel = mongoose.model('cameraman', cameramanSchema);
module.exports = cameramanModel;