const mongoose = require("mongoose");
const Movies = mongoose.model("Movie");
const Actors = mongoose.model("Actor");
const Reviews = mongoose.model("Review");

const {GraphQLString, GraphQLInt, GraphQLObjectType, GraphQLList } = require("graphql");
const ActorType = new GraphQLObjectType({
    name: 'ActorType',
    fields: () => ({
        name:{
            type: GraphQLString
        },
        lastname: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        },
        movies:{
            type: new GraphQLList(MovieType),
            resolve: (actor) => {
                return actor.movies.map(movieId => {

                    return Movies.findById(movieId)
                })
            }
        }
    })
});

const MovieType = new GraphQLObjectType({
    name: 'MovieType',
    fields: () => ({
        title:{
            type: GraphQLString
        },
        actors:{
            type: new GraphQLList(ActorType),
            resolve: (movie) => {
                return movie.actors.map(actorId => {
                    return Actors.findById(actorId);
                })
            }
        },
        reviews:{
            type: new GraphQLList(ReviewType),
            resolve: (movie) => {
                return movie.reviews.map(reviewId => {
                    return Reviews.findById(reviewId);
                })
            }
        }
    })
});

const ReviewType = new GraphQLObjectType({
    name: 'ReviewType',
    fields: () => ({
        rating:{
            type: GraphQLInt
        },
        review: {
            type: GraphQLString
        },
        movie:{
            type: MovieType,
            resolve: (review) => {
                return Movies.findById(review.movie);
            }
        }
    })
});

module.exports = {
    ActorType: ActorType,
    MovieType: MovieType,
    ReviewType: ReviewType
}