import express from "express";
import {
	getListadoMascotas,
	getMascotaPorId,
	nuevaMascota,
	editarMascota,
	borrarMascota,
} from "../controllers/mascota.controller.js";

const router = express.Router();


router.get("/:id", getMascotaPorId);
router.post("/agregar", nuevaMascota);
router.delete("/eliminar/:id", borrarMascota);
router.put("/editar/:id", editarMascota);
router.get("/", getListadoMascotas);

export default router;
