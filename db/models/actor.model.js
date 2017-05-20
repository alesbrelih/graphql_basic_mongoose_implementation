const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actorSchema = new Schema({
    name:{ type: String },
    lastname: { type: String },
    age: { type: Number },
    movies: [{type:mongoose.Schema.Types.ObjectId, ref:'Movie'}]
});

module.exports = actorSchema;