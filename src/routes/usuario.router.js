import express from "express";
import { getUsuario, getUsuarios, nuevoUsuario } from "../controllers/usuario.controller.js";

const router = express.Router();

router.get("/", getUsuarios);
router.get("/:idUsuario", getUsuario);
router.post("/", nuevoUsuario);

export default router;
