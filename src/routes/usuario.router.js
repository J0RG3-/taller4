import express from "express";
import { getUsuario, getUsuarios, nuevoUsuario } from "../controllers/usuario.controller.js";

const router = express.Router();

router.get("/usuarios", getUsuarios);
router.get("usuarios/:idUsuario", getUsuario);
router.post("/nuevousuario", nuevoUsuario);

export default router;
