const mongoose = require('mongoose');
const date = require('date-and-time');

const NewsSchema = new mongoose.Schema({
    title_tm: {
        type: String,
        default: 'No title'
    },
    title_ru: {
        type: String,
        default: 'No title'
    },
    content_tm: {
        type: String,
        default: 'No content'
    },
    content_ru: {
        type: String,
        default: 'No content'
    },
    image: {
        type: String,
        default: ''
    },
    author: {
        type: String,
        default: null
    },
    phone_number: {
        type: String,
        default: null
    },
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sections'
    },
    view: {
        type: Number,
        default: 0
    },
    show_at: {
        type: Date,
        default: new Date(),
    },
},
    {
        timestamps: true
    });

module.exports = mongoose.model("News", NewsSchema);