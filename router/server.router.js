const express = require("express");
const graphQLHTTP = require("express-graphql");
const schema = require("../graphql/server.graphql.schema");
const apiRouter = require("./api/v1/api.v1.router");

const Router = express.Router;
const mainRouter = new Router();

//get
mainRouter.use("/api/v1", apiRouter);
//graphql
mainRouter.use("/graphql", graphQLHTTP({
    schema: schema,
    graphiql: true
}));

module.exports = mainRouter;