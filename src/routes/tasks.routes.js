import express from 'express'
import { fetchTasks , postTask , updateTask, deleteTask } from '../controllers/tasks.controllers.js'
import validator from '../validators/validator.js';
import taskSchema from '../schemas/tasks.schemas.js';
import authMiddleware from '../Middlewares/auth.middleware.js';

const router = express.Router()

router.use(authMiddleware)

router.get('/',fetchTasks);
router.post('/',validator(taskSchema),postTask);
router.put('/:id',validator(taskSchema),updateTask)
router.delete('/:id',deleteTask)

export default router;