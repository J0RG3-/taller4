import express from "express";
import {
	nuevaMascota,
	getMascota,
	borrarMascota,
	getMascotas,
} from "../controllers/mascota.controller.js";

const router = express.Router();

router.get("/mascotas", getMascotas);
router.get("mascota/:id", getMascota);
router.post("/nuevaMascota", nuevaMascota);
router.delete("mascota/:id", borrarMascota);

export default router;
