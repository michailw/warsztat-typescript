import SingletonUsage from "./singleton/usage";
import FactoryMethodUsage from "./factoryMethod/usage";
import AbstractFactoryUsage from "./abstractFactory/usage";
import AdapterUsage from "./adapter/usage";
import ObserverUsage from "./observer/usage";
import Output from "./output";

import express = require("express");

const app: express.Application = express();

const output = new Output();
const standardConsoleLog = console.log;
console.log = function (message: string) {
    output.push(message);
    // @ts-ignore
    standardConsoleLog.apply(console, arguments);
};

app.get("/", (req, res) => {
    res.send("Warsztat Typescript dla ZDZ");
});

app.get("/singleton", (req, res) => {
    SingletonUsage();
    res.send(output.flush());
});

app.get("/adapter", (req, res) => {
    AdapterUsage();
    res.send(output.flush());
});

app.get("/observer", (req, res) => {
    ObserverUsage();
    res.send(output.flush());
});

app.get("/factoryMethod", (req, res) => {
    FactoryMethodUsage()
    res.send(output.flush());
});

app.get("/abstractFactory", (req, res) => {
    AbstractFactoryUsage()
    res.send(output.flush());
});

app.get("/dependencyInjection", (req, res) => {
    FactoryMethodUsage()
    res.send(output.flush());
});


app.listen(80, () => {
    standardConsoleLog("Web server started listening on port 80");
});
