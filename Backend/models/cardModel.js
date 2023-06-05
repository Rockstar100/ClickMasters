const mongoose = require('mongoose');
const colors = require('colors');

const cardSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    image:{
        type: String,
    },
    title:{
        type: String,
    },


}
, {timestamps: true})

const cardModel = mongoose.model('Cards',cardSchema);
module.exports = cardModel;