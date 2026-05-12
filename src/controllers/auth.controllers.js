import asyncHandler from '../Utilities/asyncHandler.js'
import {createUser,loginUser} from '../services/users.services.js'

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
    req.session.userId = id;

    res.json({"success":true})
})

export const logoutController = asyncHandler(async (req,res)=>{
    req.session.destroy(()=>{
        res.clearCookie("connect.sid");
        res.json({"success":true})
    })
})