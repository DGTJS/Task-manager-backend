import express from "express";
import TaskController from "../controllers/task.controller.js";

const router = express.Router();

router.get("/", async (req, res) => {
    return new TaskController(req, res).getTask();
});

router.get("/:id", async (req, res) => {
    return new TaskController(req, res).getTaskByid();
});

router.post("/", async (req, res) => {
    return new TaskController(req, res).CreateTask();
});

router.patch("/", async (req, res) => {
    return new TaskController(req, res).UpdateTask();
});

router.delete("/:id", async (req, res) => {
    return new TaskController(req, res).DeleteTask();
});

export default router;
