const {MovieType} = require("../../types/graphql.types");
const {GraphQLString} = require("graphql");
const mongoose = require("mongoose");
const Movies = mongoose.model("Movie");


const MovieQuery = {
    type: MovieType,
    description: 'Returns movie object',
    args: {
        id: {
            name: 'id',
            type: GraphQLString
        }
    },
    resolve: (parent, args) => {
        return Movies.findById(args.id);
    }
};

module.exports = MovieQuery;