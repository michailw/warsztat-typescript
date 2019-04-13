import express = require("express");

const app: express.Application = express();

app.get("/", (req, res) => {
    res.send("Warsztat Typescript dla ZDZ");
});

app.listen(80, () => {
    console.log("Web server started listening on port 80");
});
