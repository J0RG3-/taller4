import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
	},
	descripcion: {
		type: String,
		required: true,
	},
	edad: {
		type: int,
		required: true,
	},
	especie: {
		type: String,
		required: true,
	},
	sexo: {
		type: String,
		required: true,
	},
    nroChip: {
		type: String,
		required: false,
	},
	fotos: {
		type: String[3],
		required: true,
	},
});

const mascotaModelo = mongoose.model("Mascota", mascotaSchema);

export default mascotaModelo;