const {GraphQLSchema} = require("graphql");

//graph types

const QueryType = require("./query/graphql.query");

const MutationType = require("./mutation/graphql.mutation");


module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
});