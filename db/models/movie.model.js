const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String },
    actors: [{type: Schema.Types.ObjectId, ref:'Actor'}],
    reviews: [{type: Schema.Types.ObjectId, ref:'Review'}]
});


module.exports = movieSchema;