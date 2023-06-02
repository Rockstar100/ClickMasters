const mongoose = require('mongoose');
const colors = require('colors');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        // unique: true,
    },
    password:{
        type: String,
        required: [true, 'Please add a password'],
    },
    profie_pic :{
        type : String,
       
    },
    bio :{
        type : String,


    },
    location :{
        type : String,
    },
    address :{
        type : Object,

    },
    
    isAdmin:{
        type: Boolean,
        default: false,
    },
    phone:{
        type : String,
    },
    notification : {
        type: Array,
        default: [],
    },
    seennotification : {
        type: Array,
        default: [],
    },
    isCameraman:{
        type: Boolean,
        default: false,
    },





}, {timestamps: true})
const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
