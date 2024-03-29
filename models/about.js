const mongoose = require('mongoose');
const date = require('date-and-time');

const AboutSchema = new mongoose.Schema({
    content_tm: {
        type: String,
        default: ''
    },
    content_ru: {
        type: String,
        default: ''
    },
},
    {
        timestamps: true
    });

module.exports = mongoose.model("About", AboutSchema);