const express = require("express");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/mongoose.database");

const TaskModel = require("./src/models/task.models");

dotenv.config();

const app = express();

connectToDatabase();

app.get("/task", async (req, res) => {
    const taskModel = await TaskModel.find({});
    res.status(200).send(taskModel);
});

app.listen(8000, () => {
    console.log("Listening on port 8000!");
});
