const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: { type: String, 
        required: true },
        
    date: { type: Date, 
        required: false },

    url: { type: String, 
        required: true },

    saved: { type: Boolean, 
        required: true, 
        default: false },

    comment: { type: String,
        required: false }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;