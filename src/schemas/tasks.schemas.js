import {z} from 'zod'

const taskSchema = z.object({
    title : z.string().trim().min(5).max(50),
    description : z.string().optional(),
    completed : z.boolean().default(false).optional()
})

export default taskSchema;