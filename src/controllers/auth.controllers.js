import asyncHandler from '../Utilities/asyncHandler.js'
import {createUser,loginUser} from '../services/users.services.js'
import { createSession,deleteSession } from '../services/sessions.services.js';

export const signUpController = asyncHandler(async (req,res,next) => {
    const {name,email,password} = req.validated;
    const user = await createUser({name,email,password});
    req.userId = user.id;
    next()
})

export const loginController = asyncHandler(async (req,res,next) => {
    const {email,password} = req.validated;
    const user = await loginUser({email,password});
    req.userId = user.id;
    next()
})

export const manageNewSession = asyncHandler(async (req,res) => {
    const id = req.userId;
    const session = await createSession(id);
    
    res.cookie("sessionId",session.id,{
        httpOnly : true
    })

    res.status(201).json({
        success : true
    })
})

export const logoutController = asyncHandler(async (req,res)=>{
    const sessionId = req.sessionId;
    await deleteSession(sessionId);

    res.clearCookie("sessionId",{httpOnly:true});
    res.status(200).json({"success" : true});
})