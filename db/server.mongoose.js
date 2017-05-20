const CONFIG = require("../config/server.config");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise; //resolve deprication

//connect to db
mongoose.connect(CONFIG.MONGO.CONNECTION_PATH);


//register models
const actorModel = require("./models/actor.model");
const movieModel = require("./models/movie.model");
const reviewModel = require("./models/review.model");

mongoose.model('Actor', actorModel);
mongoose.model('Movie', movieModel);
mongoose.model('Review', reviewModel);
