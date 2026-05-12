import db from '../db/db.js'
import AppError from '../Utilities/appError.js';
import bcrypt from 'bcrypt';

export async function createUser({ name, email, password }) {
    try {
        const hashed = await bcrypt.hash(password,12);
        const res = await db.query('INSERT INTO USERS(NAME,EMAIL,PASSWORD) VALUES($1,$2,$3) RETURNING ID;', [name, email, hashed]);
        return res.rows[0];
    } catch (error) {
        if (error.code === "23505") {
            throw new AppError('Email already registered', 409)
        }
        throw error;
    }
}

export async function loginUser({ email, password }) {
    const res = await db.query('SELECT * from USERS WHERE email = $1;',[email]);
    const data = res.rows;

    if (data.length === 0) {
        throw new AppError("User not found", 404);
    }
    const user = data[0]
    const verify = await bcrypt.compare(password, user.password);

    if (!verify) {
        throw new AppError("Unauthenticated entry", 401);
    }
    delete user.password;
    return user;
}