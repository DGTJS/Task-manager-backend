const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("hello word!");
});

app.listen(8000, () => {
    console.log("Listening on port 8000!");
});
