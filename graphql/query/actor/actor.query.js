const {ActorType} = require("../../types/graphql.types");
const {GraphQLString} = require("graphql");
const mongoose = require("mongoose");
const Actors = mongoose.model("Actor");

const ActorQuery = {
    type: ActorType,
    description: 'Returns actor object',
    args: {
        id: {
            name: 'id',
            type: GraphQLString
        }
    },
    resolve: (parent, args) => {
        return Actors.findById(args.id);
    }
};

module.exports = ActorQuery;