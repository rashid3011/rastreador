const express = require("express");

const app = express();

app.use('/', (req, res) => {
    res.send("Initial test API");
})

module.exports = app;