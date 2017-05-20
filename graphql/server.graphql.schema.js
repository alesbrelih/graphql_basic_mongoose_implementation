const mongoose = require("mongoose");
const Actors = mongoose.model('Actor');
const Movies = mongoose.model('Movie');
const Reviews = mongoose.model('Review');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLInt
} = require("graphql");


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
                    Reviews.findById(reviewId);
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

const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    fields: () => ({
        actor: {
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
        },
        movie:{
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
        },
        review:{
            type: ReviewType,
            description: 'Returns review type',
            args: {
                id:{
                    name: 'id',
                    type: GraphQLString
                }
            },
            resolve: (parent, args) => {
                return Reviews.findById(args.id);
            }
        }
    })
});

module.exports = new GraphQLSchema({
    query: QueryType
});