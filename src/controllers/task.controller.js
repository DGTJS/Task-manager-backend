import TaskModel from "../models/task.models.js";
import {
    notFoundError,
    InternalServerError,
} from "../errors/mongodb.errors.js";

export default class TaskController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }
    async getTask() {
        try {
            const taskModel = await TaskModel.find({});
            this.res.status(200).send(taskModel);
        } catch (error) {
            InternalServerError(this.res);
        }
    }

    async getTaskByid() {
        try {
            const TaskId = this.req.params.id;

            const TaskById = await TaskModel.findById(TaskId);
            if (!TaskById) {
                return notFoundError(this.res);
            }

            this.res.status(200).send(TaskById);
        } catch (error) {
            InternalServerError(res);
        }
    }

    async CreateTask() {
        try {
            const CreateTask = new TaskModel(this.req.body);

            await CreateTask.save();
            this.res.status(201).send(CreateTask);
        } catch (error) {
            InternalServerError(this.res);
        }
    }
    async UpdateTask() {
        try {
            const taskId = this.req.params.id;

            const taskData = this.req.body;

            const updateTask = await TaskModel.findByIdAndUpdate(
                taskId,
                taskData
            );

            this.res.status(200).send(updateTask);
        } catch (error) {
            InternalServerError(this.res);
        }
    }
    async DeleteTask() {
        try {
            const Taskid = this.req.params.id;

            const taskToDelete = await TaskModel.findById(Taskid);

            if (!taskToDelete) {
                return notFoundError(this.res);
            }

            await TaskModel.findByIdAndDelete(Taskid);

            this.res.status(200).send("Tarefa deletada com sucesso!");
        } catch (error) {
            InternalServerError(this.res);
        }
    }
}
