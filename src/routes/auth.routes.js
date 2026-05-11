import express from 'express'
import validator from '../validators/validator.js';
import { loginSchema, signUpSchema } from '../schemas/auth.schemas.js';
import { signUpController,loginController,manageNewSession,logoutController } from '../controllers/auth.controllers.js';
import authMiddleware from '../Middlewares/auth.middleware.js';


const router = express.Router();

router.post('/signup',validator(signUpSchema),signUpController,manageNewSession);
router.post('/login',validator(loginSchema),loginController,manageNewSession);

router.delete('/sessions',authMiddleware,logoutController);

export default router;