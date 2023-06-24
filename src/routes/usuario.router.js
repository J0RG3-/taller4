import express from "express";
import { getUsuario, getUsuarios } from "../controllers/usuario.controller.js";

const router = express.Router();

router.get("/", getUsuarios);
router.get("/:idUsuario", getUsuario);

export default router;
