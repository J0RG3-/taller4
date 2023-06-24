import express from "express";
import { login, registrar } from "../controllers/auth.controller.js";

const authRouter=express.Router();

authRouter.post("/register",registrar);
authRouter.post("/login",login)

export default authRouter;