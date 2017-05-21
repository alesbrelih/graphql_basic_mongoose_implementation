const {ReviewType} = require("../../types/graphql.types");
const {GraphQLString} = require("graphql");
const mongoose = require("mongoose");
const Reviews = mongoose.model("Review");

const ReviewQuery = {
    type: ReviewType,
    description: 'Returns review type',
    args: {
        id: {
            name: 'id',
            type: GraphQLString
        }
    },
    resolve: (parent, args) => {
        return Reviews.findById(args.id);
    }
};

module.exports = ReviewQuery;