import { Router } from "express";

import { login, register, logout, getSession } from "../controllers/authController";

const authRouter = Router();

authRouter.post("/login", login);
authRouter.post("/register", register);
authRouter.post("/logout", logout);
authRouter.post("/session", getSession);

export default authRouter;
