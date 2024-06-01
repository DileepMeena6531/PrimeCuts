const { name } = require("ejs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User=require("./user");

const primeCutSchema = new Schema({ 
    name:
    {
        type: String,
        required: true
    },
    address:
    {
        type: String,
        required: true
    },
    // owner:  
    // {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },

    owner:{
        type:String
    },

    services: [{
        name: String,
        price: Number
    }],

    pictures: [String], 

    openingHours:
    {
        monday: { start: String, end: String },
        tuesday: { start: String, end: String },
        wednesday: { start: String, end: String },
        thursday: { start: String, end: String },
        friday: { start: String, end: String },
    }
});

module.exports = mongoose.model('PrimeCut', primeCutSchema);
