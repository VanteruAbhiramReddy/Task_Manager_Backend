import asyncHandler from "../Utilities/asyncHandler.js";

const authMiddleware = asyncHandler(async (req,res,next) => {
    const userId = req.session.userId;

    if(!userId){
        return res.status(401).json({success:false , message : "Unauthorized"})
    }
    req.userId = userId
    next()
})

export default authMiddleware;