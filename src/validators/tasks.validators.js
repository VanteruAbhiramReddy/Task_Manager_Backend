import asyncHandler from '../Utilities/asyncHandler.js'
import taskSchema from "../schemas/tasks.schemas.js";

const taskValidator = asyncHandler ((req,res,next) => {
    const validatedData = taskSchema.parse(req.body);
    req.validated = validatedData;
    next()
})

export default taskValidator;