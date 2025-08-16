const express = require("express");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/mongoose.database");
const TaskRouter = require("./src/routes/task.routes");
const TaskModel = require("./src/models/task.models");

dotenv.config();

const app = express();
app.use(express.json());

connectToDatabase();

app.use("/task", TaskRouter);

app.listen(8000, () => {
    console.log("Listening on port 8000!");
});
