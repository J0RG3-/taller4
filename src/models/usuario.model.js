import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
	},
	apPaterno: {
		type: String,
		required: true,
	},
    apMaterno: {
		type: String,
		required: true,
	},
    email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const usuarioModelo = mongoose.model("Usuario", usuarioSchema);

export default usuarioModelo;
