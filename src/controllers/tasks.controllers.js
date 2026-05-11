import { getTasks, createTask, putTask, dropTask } from "../services/tasks.services.js";
import asyncHandler from '../Utilities/asyncHandler.js'

export const fetchTasks = asyncHandler(async (req, res) => {
    const userId = req.userId
    const tasks = await getTasks(userId);
    res.status(200).json(tasks);
})

export const postTask = asyncHandler(async (req, res) => {
    const userId = req.userId;
    const { title, description, completed } = req.validated;
    const data = await createTask({ title, description, completed,userId });
    res.status(201).json(data)
})

export const updateTask = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const userId = req.userId;
    const { title, description, completed } = req.validated;
    const data = await putTask({ id, description, title, completed , userId})
    res.json({ success: true, data })
})

export const deleteTask = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const userId = req.userId;
    const data = await dropTask({id,userId});
    res.json({ success: true, data });
})