const mongoose = require("mongoose");
const Actors = mongoose.model("Actor");
const {GraphQLObjectType, GraphQLString, GraphQLInt} = require("graphql");
const {ActorType} = require("../../types/graphql.types");

const addActorMutation = {
    type: ActorType,
    args:{
        name: {
            type: GraphQLString,
            name:'name'
        },
        lastname:{
            type: GraphQLString,
            name: 'lastname'
        },
        age: {
            type: GraphQLInt,
            name: 'age'
        }
    },
    resolve: (parent, args) => {
        const actorDb = new Actors({
            name: args.name,
            lastname: args.lastname,
            age: args.age
        });

        return actorDb.save();
    }
};

module.exports = {
    AddActor: addActorMutation
}