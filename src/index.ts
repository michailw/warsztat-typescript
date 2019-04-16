import SingletonUsage from "./singleton/usage";
import FactoryMethodUsage from "./factory/FactoryMethodUsage";

import express = require("express");

const app: express.Application = express();

app.get("/", (req, res) => {
    res.send("Warsztat Typescript dla ZDZ");
});

app.get("/singleton", (req, res) => {
    res.send(SingletonUsage());
});

app.get("/factoryMethod", (req, res) => {
    res.send(FactoryMethodUsage());
});


app.listen(80, () => {
    console.log("Web server started listening on port 80");
});
