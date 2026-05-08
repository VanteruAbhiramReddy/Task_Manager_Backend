import db from '../db/db.js'

export async function getTasks() {
    try {
        const res = await db.query('SELECT * FROM TASKS;');
        return res.rows;
    }catch(err){
        console.log(err.message);
    }
}

export async function createTask({title,description}){
    try{
        const res = await db.query('INSERT INTO TASKS(TITLE,DESCRIPTION) VALUES($1,$2) RETURNING *;',[title,description]);
        return res.rows;
    }catch(err){
        console.log(err.message);
    }
}

export async function putTask({id,title,description,completed}) {
    try{
        const res = await db.query('UPDATE TASKS SET TITLE = $1, DESCRIPTION = $2, COMPLETED = $3 WHERE ID = $4 RETURNING *',[title,description,completed,id]);
        return res.rows;
    }catch(err){
        console.log(err.message);
    }
}

export async function dropTask(id) {
    try{
        const res = await db.query('DELETE FROM TASKS WHERE ID = $1 RETURNING *;',[id]);
        return res.rows;
    }catch(err){
        console.log(err.message);
    }
}