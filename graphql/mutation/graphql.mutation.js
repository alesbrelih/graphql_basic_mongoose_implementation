const {GraphQLObjectType} = require("graphql");

module.exports = new GraphQLObjectType({
    name: 'Mutations',
    fields: ()=>({
        addActor : {}
    })
});
