import db from '../db/db.js'
import AppError from '../Utilities/appError.js';

export async function getTasks(userId) {
    const res = await db.query('SELECT * FROM TASKS WHERE USER_ID=$1;', [userId]);
    if (res.rows.length === 0) throw new AppError("Tasks not found", 404);
    return res.rows;
}

export async function createTask({ title, description, userId }) {
    const res = await db.query('INSERT INTO TASKS(TITLE,DESCRIPTION,USER_ID) VALUES($1,$2,$3) RETURNING *;', [title, description, userId]);
    return res.rows[0];
}

export async function putTask({ id, title, description, completed, userId }) {
    const res = await db.query('UPDATE TASKS SET TITLE = $1, DESCRIPTION = $2, COMPLETED = $3 WHERE ID = $4 AND USER_ID = $5 RETURNING *', [title, description, completed, id, userId]);
    if (res.rows.length === 0) throw new AppError("Task not found", 404);
    return res.rows[0];
}

export async function dropTask({ id, userId }) {
    const res = await db.query('DELETE FROM TASKS WHERE ID = $1 AND USER_ID = $2 RETURNING *;', [id, userId]);
    if (res.rows.length === 0) throw new AppError("Task not found", 404);
    return res.rows[0];
}