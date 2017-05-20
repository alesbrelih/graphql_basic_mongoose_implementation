const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({

    rating: { type: Number, min:1, max:5 },
    review: { type: String },
    movie: { type: Schema.Types.ObjectId, ref: 'Movie' }

});


module.exports = reviewSchema;