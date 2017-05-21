const {GraphQLObjectType} = require("graphql");

const ActorQuery = require("./actor/actor.query");
const MovieQuery = require("./movie/movie.query");
const ReviewQuery = require("./review/review.query");

const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    fields: () => ({
        actor: ActorQuery,
        movie: MovieQuery,
        review: ReviewQuery
    })
});

module.exports = QueryType;