import { verifySession } from "../services/sessions.services.js";
import asyncHandler from "../Utilities/asyncHandler.js";

const authMiddleware = asyncHandler(async (req,res,next) => {
    const sessionId = req.cookies.sessionId;

    if(!sessionId){
        return res.status(401).json({
            "success" : false
        })
    }
    const session = await verifySession(sessionId);

    if(!session){
        return res.status(401).clearCookie("sessionId",{
            httpOnly : true
        }).json({
            "success" : false
        })
    }
    req.userId = session.user_id;
    req.sessionId = session.id;
    next()
})

export default authMiddleware;