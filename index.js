const express = require("express");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/mongoose.database");

const TaskModel = require("./src/models/task.models");

dotenv.config();

const app = express();
app.use(express.json());

connectToDatabase();

app.get("/task", async (req, res) => {
    try {
        const taskModel = await TaskModel.find({});
        res.status(200).send(taskModel);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post("/task", async (req, res) => {
    try {
        const CreateTask = new TaskModel(req.body);

        await CreateTask.save();
        res.status(201).send(CreateTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(8000, () => {
    console.log("Listening on port 8000!");
});
