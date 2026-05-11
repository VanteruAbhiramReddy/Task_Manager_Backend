import {v4 as uuidv4} from 'uuid'
import db from '../db/db.js'

export async function createSession(userId){
    try {
        const sessionId = uuidv4();
        const res = await db.query('INSERT INTO SESSIONS(id,user_id)VALUES($1,$2) RETURNING *;',[sessionId,userId]);
        return res.rows[0];
    } catch (error) {
        if(error.code===23505){
            return await createSession({userId});
        }
        throw error;
    }
}

export async function verifySession(sessionId) {
    const res = await db.query('SELECT * FROM SESSIONS WHERE ID=$1;',[sessionId]);
    const session = res.rows[0];
    if(!session){
        return false
    }
    return session;
}

export async function deleteSession(sessionId){
    const res = await db.query('DELETE FROM SESSIONS WHERE ID = $1 RETURNING *;',[sessionId]);
    return res.rows[0];
}   