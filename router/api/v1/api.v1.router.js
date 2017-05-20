const express = require("express");
const Router = express.Router;




const apiRouter = new Router();

//actors
const actorsRouter = require("./actors/api.v1.actors.router");
apiRouter.use("/actor",actorsRouter);

//movies
const moviesRouter = require("./movies/api.v1.movies.router");
apiRouter.use("/movie", moviesRouter);

//reviews
const reviewsRouter = require("./reviews/api.v1.reviews.router");
apiRouter.use("/review", reviewsRouter);


module.exports = apiRouter;