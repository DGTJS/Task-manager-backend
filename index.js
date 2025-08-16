import express from "express";
import dotenv from "dotenv";

import connectToDatabase from "./src/database/mongoose.database.js";
import TaskRouter from "./src/routes/task.routes.js";
import TaskModel from "./src/models/task.models.js";

dotenv.config();

const app = express();
app.use(express.json());

connectToDatabase();

app.use("/task", TaskRouter);

app.listen(8000, () => {
    console.log("Listening on port 8000!");
});
