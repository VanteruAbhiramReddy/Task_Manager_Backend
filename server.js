import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'

import tasks from './src/routes/tasks.routes.js'
import auth from './src/routes/auth.routes.js'
import errorMiddleware from './src/Middlewares/errors.middleware.js'

const server = express();
const port = process.env.PORT || 5000;

server.use(cors())
server.use(helmet())
server.use(express.json())
server.use(cookieParser())

server.use('/tasks',tasks);
server.use('/auth',auth);

server.use(errorMiddleware);
server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
})