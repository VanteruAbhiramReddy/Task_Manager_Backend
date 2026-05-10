import express from 'express'
import { fetchTasks , postTask , updateTask, deleteTask } from '../controllers/tasks.controllers.js'
import taskValidator from '../validators/tasks.validators.js';

const router = express.Router()

router.get('/',fetchTasks);
router.post('/',taskValidator,postTask);
router.put('/:id',taskValidator,updateTask)
router.delete('/:id',deleteTask)

export default router;