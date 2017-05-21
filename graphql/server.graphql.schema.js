const {GraphQLSchema} = require("graphql");

//graph types

const QueryType = require("./query/graphql.query");

module.exports = new GraphQLSchema({
    query: QueryType
});