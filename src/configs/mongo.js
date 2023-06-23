import mongoose from "mongoose";
//import { MONGO_URI } from "./environment.js";

const MONGO_URI = 'mongodb://localhost:27017/adopcion';
export default function connectDB() {
	return mongoose
		.connect(MONGO_URI)
		.then(async () => {
			console.log("conexión exitosa");
			await registerModels();
			return true;
		})
		.catch((error) => {
			console.log(`Error: ${error}`);
			return false;
		});
}

async function registerModels() {
	await import("../models/mascota.model.js");
	await import("../models/usuario.model.js");
}
