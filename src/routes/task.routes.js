import express from "express";
import TaskModel from "../models/task.models.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const taskModel = await TaskModel.find({});
        return res.status(200).send(taskModel);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const TaskId = req.params.id;

        const TaskById = await TaskModel.findById(TaskId);
        if (!TaskById) {
            return res.status(404).send("Essa tarefa não foi encontrada.");
        }

        res.status(200).send(TaskById);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const CreateTask = new TaskModel(req.body);

        await CreateTask.save();
        res.status(201).send(CreateTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.patch("/", async (req, res) => {
    try {
        const taskId = req.params.id;

        const taskData = req.body;

        const updateTask = await TaskModel.findByIdAndUpdate(taskId, taskData);

        return res.status(200).send(updateTask);
    } catch (error) {}
});

router.delete("/:id", async (req, res) => {
    try {
        const Taskid = req.params.id;

        const taskToDelete = await TaskModel.findById(Taskid);

        if (!taskToDelete) {
            return res.status(404).send("Essa Tarefa não foi encontrada");
        }

        await TaskModel.findByIdAndDelete(Taskid);

        res.status(200).send("Tarefa deletada com sucesso!");
    } catch (error) {
        res.status(500).send("Essa Tarefa não foi encontrada");
    }
});

export default router;
