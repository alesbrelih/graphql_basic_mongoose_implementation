/** Mongo private Config */
const mongoConfig = {
    HOST: 'mongodb://localhost',
    PORT: '27017',
    DATABASE: 'graphql_implementation'
};


/**Public configs */
module.exports = {
    APP:{
        PORT: 8080
    },
    MONGO:{
        CONNECTION_PATH:`${mongoConfig.HOST}:${mongoConfig.PORT}/${mongoConfig.DATABASE}`
    }
}