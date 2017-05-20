const express = require("express");
const mongoose = require("mongoose");
const Review = mongoose.model("Review");
const Movie = mongoose.model("Movie");
const Router = express.Router;


const reviewsRouter = new Router();

//create review
reviewsRouter.post("/", (req, res) => {
    const { rating, review, movie } = req.body;

    const reviewDb = new Review({
        rating: rating,
        review: review,
        movie: movie
    });

    reviewDb.save((err, reviewSaved) => {
        if(err){
            res.status(500).send(err);
            return;
        }

        //save movie reviews
        Movie.findById(reviewSaved.movie,(err, movieDb)=>{
            movieDb.reviews.push(reviewSaved._id);
            movieDb.save((err, movieUpdated)=>{
                if(err){
                    res.status(500).send(err);
                    return;
                }
                res.status(200).send("Success");
            })
        })

    })
})

module.exports = reviewsRouter;