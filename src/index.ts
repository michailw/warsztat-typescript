import SingletonUsage from "./singleton/usage";
import FactoryMethodUsage from "./factoryMethod/usage";
import AbstractFactoryUsage from "./abstractFactory/usage";
import AdapterUsage from "./adapter/usage";
import ObserverUsage from "./observer/usage";
import DIMethodUsage from "./dependencyInjection/usage"
import Output from "./output";

import express = require("express");
import Czworobok from "./math/Czworobok";
import Prostokat from "./math/Prostokat";

const app: express.Application = express();

const output = new Output();
const standardConsoleLog = console.log;
console.log = function (message: any) {
    message = message.toString();
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
    FactoryMethodUsage();
    res.send(output.flush());
});

app.get("/abstractFactory", (req, res) => {
    AbstractFactoryUsage();
    res.send(output.flush());
});

app.get("/dependencyInjection", (req, res) => {
    DIMethodUsage();
    res.send(output.flush());
});

app.get("/czworokat", (req, res) => {
    const czworokat1 = new Czworobok(1, 2, 3, 4);
    const prostokat1 = new Prostokat(5, 6);

    console.log(czworokat1.liczObwod());

    console.log(prostokat1.liczObwod());
    console.log(prostokat1.liczPole());

    res.send(output.flush());
});


app.listen(80, () => {
    standardConsoleLog("Web server started listening on port 80");
});
