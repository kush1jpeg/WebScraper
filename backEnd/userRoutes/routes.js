import express from "express";
import { zodRegister, zodLogin } from "../zod/zod-register.js";
import {jwtToken} from "../middleWares/jwt.js"

const router = express.Router();

//register router
router.post("/register" , zodRegister , userRegister , jwtToken);

//login
router.post("/login", zodLogin , userLogin , jwtToken);

export default router;

