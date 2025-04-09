import express from "express";
import { zodRegister, zodLogin } from "../zod/zod-register.js";
import {jwtToken} from "../middleWares/jwt.js"
import { clearCookies } from "../middleWares/clearCookies.js";
const router = express.Router();

//register router
router.post("/register" , zodRegister , userRegister , jwtToken);

//login
router.post("/login", zodLogin , userLogin , jwtToken);

//logout
router.post("/logout" , clearCookies );

export default router;

