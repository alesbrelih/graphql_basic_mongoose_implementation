const express = require("express");
const mongoose = require("mongoose");
const Movie = mongoose.model("Movie");
const Actor = mongoose.model("Actor");
const Router = express.Router;


const moviesRouter = new Router();

//add movie
moviesRouter.post("/", (req, res) => {
    const {title, actors} = req.body;

    const movieDb = new Movie({
        title: title,
        actors: actors
    });

    movieDb.save((err, movie)=>{
        if(err){
            res.status(500).send(err);
            return;
        }

        for(let actor of movie.actors){
            Actor.findById(actor, (err, actorDb) => {
                if(err){
                    res.status(500).send(err);
                    return;
                }
                actorDb.movies.push(movie._id);
                actorDb.save((err, actorUpdated) => {
                    if(err){
                        res.status(500).send(err);
                        return;
                    }
                    res.status(200).send(movie);
                })
            })
        }

    })

})

module.exports = moviesRouter;