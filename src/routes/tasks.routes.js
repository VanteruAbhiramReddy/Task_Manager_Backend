import express from 'express'
import { fetchTasks , postTask , updateTask, deleteTask } from '../controllers/tasks.controllers.js'

const router = express.Router()

router.get('/',fetchTasks);
router.post('/',postTask);
router.put('/',updateTask)
router.delete('/:id',deleteTask)

export default router;