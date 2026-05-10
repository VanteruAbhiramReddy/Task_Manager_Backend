import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import tasks from './src/routes/tasks.routes.js'
import errorMiddleware from './src/Middlewares/errors.middlewares.js'

const server = express();
const port = process.env.PORT || 5000;

server.use(cors())
server.use(helmet())
server.use(express.json())

server.use('/tasks',tasks);

server.use(errorMiddleware);
server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
})