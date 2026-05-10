import { getTasks, createTask, putTask, dropTask } from "../services/tasks.services.js";
import asyncHandler from '../Utilities/asyncHandler.js'

export const fetchTasks = asyncHandler(async (req, res) => {
    const tasks = await getTasks();
    res.status(200).json(tasks);
})

export const postTask = asyncHandler(async (req, res) => {
    const { title, description, completed } = req.validated;
    const data = await createTask({ title, description, completed });
    res.status(201).json(data)
})

export const updateTask = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { title, description, completed } = req.validated;
    const data = await putTask({ id, description, title, completed })
    res.json({ success: true, data })
})

export const deleteTask = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const data = await dropTask(id);
    res.json({ success: true, data });
})