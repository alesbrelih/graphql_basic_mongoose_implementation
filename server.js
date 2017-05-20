const express = require("express");
const APP_CONFIG = require("./config/server.config");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());

//connect to database
require("./db/server.mongoose");

//app routing
const appRouterConfig = require("./router/server.router");
app.use("/", appRouterConfig);

app.listen(APP_CONFIG.APP.PORT,()=>{
    console.log(`Server running ${APP_CONFIG.APP.PORT}`);
})