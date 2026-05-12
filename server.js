import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'

import session from "express-session";
import pgsession from "connect-pg-simple";
import dotenv from 'dotenv'

import db from './src/db/db.js'
import tasks from './src/routes/tasks.routes.js'
import auth from './src/routes/auth.routes.js'
import errorMiddleware from './src/Middlewares/errors.middleware.js'

const server = express();
const port = process.env.PORT || 5000;

const PgStore = pgsession(session)

dotenv.config()

server.use(cors())
server.use(helmet())
server.use(express.json())
server.use(cookieParser())

server.use(session({

    store: new PgStore({
        pool: db,
        createTableIfMissing: true
    }),

    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,

    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}))

server.use('/tasks', tasks);
server.use('/auth', auth);

server.use(errorMiddleware);

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})