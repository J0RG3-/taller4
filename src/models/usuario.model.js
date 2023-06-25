import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
	},
    email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
	mascotas: {
		type: [String],
	},
});

const usuarioModelo = mongoose.model("Usuario", usuarioSchema);

export default usuarioModelo;
