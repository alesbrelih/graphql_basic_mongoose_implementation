const {GraphQLObjectType} = require("graphql");

const {AddActor} = require("./actor/actor.mutations");

const MutationType = new GraphQLObjectType({
    name: 'Mutations',
    fields: ()=>({
        addActor : AddActor
    })
});


module.exports = MutationType;
