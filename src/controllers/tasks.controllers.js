import { getTasks, createTask, putTask, dropTask } from "../services/tasks.services.js";

export const fetchTasks = async (req, res) => {
    const tasks = await getTasks();
    res.status(200).json(tasks);
}

export const postTask = async (req, res) => {
    const { title, description } = req.body;
    const data = await createTask({ title, description });
    res.status(200).json(data)

}

export const updateTask = async (req, res) => {
    const {id,title,description,completed} = req.body;
    const data = await putTask({id,description,title,completed})
    res.json({'success':'true',data})
}

export const deleteTask = async (req, res) => {
    const id =  req.params.id;
    const data = await dropTask(id);
    res.json({'success':'true',data});
}