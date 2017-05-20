const express = require("express");
const mongoose = require("mongoose");
const Router = express.Router;
const Actor = mongoose.model("Actor");


const actorsRouter = new Router();

//create new actor post route
actorsRouter.post("/", (req, res) => {

    //TODO: VERIFICATION OF DATA
    const { name, lastname, age } = req.body;

    const actorDb = new Actor({
        name: name,
        lastname: lastname,
        age: age
    });

    actorDb.save((err, actor) => {
        if(err){
            console.log(err);
            res.status(500).send(err);
            return;
        }
        res.status(200).send(actor);
    })

});


module.exports = actorsRouter;