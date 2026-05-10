import db from '../db/db.js'
import AppError from '../Utilities/appError.js';

export async function getTasks() {
    const res = await db.query('SELECT * FROM TASKS;');
    if (res.rows.length === 0) throw new AppError("Tasks not found", 404);
    return res.rows;
}

export async function createTask({ title, description }) {
    try {
        const res = await db.query('INSERT INTO TASKS(TITLE,DESCRIPTION) VALUES($1,$2) RETURNING *;', [title, description]);
        return res.rows[0];
    } catch (err) {
        if (err.code === 23505) throw new AppError("Duplicate task", 409);
        throw err;
    }
}

export async function putTask({ id, title, description, completed }) {
    try {
        const res = await db.query('UPDATE TASKS SET TITLE = $1, DESCRIPTION = $2, COMPLETED = $3 WHERE ID = $4 RETURNING *', [title, description, completed, id]);
        if (res.rows.length === 0) throw new AppError("Task not found", 404);
        return res.rows[0];
    } catch (err) {
        if (err.code === 23505) throw new AppError("Duplicate task", 409);
        throw err
    }
}

export async function dropTask(id) {
    const res = await db.query('DELETE FROM TASKS WHERE ID = $1 RETURNING *;', [id]);
    if (res.rows.length === 0) throw new AppError("Task not found", 404);
    return res.rows[0];
}