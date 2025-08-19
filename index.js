import express from "express";
import dotenv from "dotenv";
import connectToDatabase from "./src/database/mongoose.database.js";
import TaskRouter from "./src/routes/task.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

connectToDatabase();

app.use("/task", TaskRouter);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});
