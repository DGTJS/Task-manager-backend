import TaskModel from "../models/task.models.js";

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
            this.res.status(500).send(error.message);
        }
    }

    async getTaskByid() {
        try {
            const TaskId = this.req.params.id;

            const TaskById = await TaskModel.findById(TaskId);
            if (!TaskById) {
                this.res.status(404).send("Essa tarefa não foi encontrada.");
            }

            this.res.status(200).send(TaskById);
        } catch (error) {
            this.res.status(500).send(error.message);
        }
    }

    async CreateTask() {
        try {
            const CreateTask = new TaskModel(this.req.body);

            await CreateTask.save();
            this.res.status(201).send(CreateTask);
        } catch (error) {
            this.res.status(500).send(error.message);
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
            this.res.status(500).send("Não foi possivel atualizar");
        }
    }
    async DeleteTask() {
        try {
            const Taskid = this.req.params.id;

            const taskToDelete = await TaskModel.findById(Taskid);

            if (!taskToDelete) {
                return this.res
                    .status(404)
                    .send("Essa Tarefa não foi encontrada");
            }

            await TaskModel.findByIdAndDelete(Taskid);

            this.res.status(200).send("Tarefa deletada com sucesso!");
        } catch (error) {
            this.res.status(500).send("Essa Tarefa não foi encontrada");
        }
    }
}
