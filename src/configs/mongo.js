import mongoose from "mongoose";
import { MONGO_URI } from "./environment.js";

export default async function connectDB() {
	try{
		await mongoose.connect(MONGO_URI);
		
		console.log("conexion a la bd exitosa")
	}catch(e){
		console.log(e)
	}
}

async function registerModels() {
	await import("../models/mascota.model.js");
	await import("../models/usuario.model.js");
}
