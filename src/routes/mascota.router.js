import express from "express";
import {
	nuevaMascota,
	getMascota,
	borrarMascota,
	getMascotas,
} from "../controllers/mascota.controller.js";

const router = express.Router();

router.get("/", getMascotas);
router.get("/:id", getMascota);
router.post("/", nuevaMascota);
router.delete("/:id", borrarMascota);

export default router;
