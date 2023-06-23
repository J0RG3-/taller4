import express from "express";
import usuarioRouter from "./src/routes/usuario.router.js";
import mascotasRouter from "./src/routes/mascota.router.js";
import { PORT } from "./src/configs/environment.js";
import connectDB from "./src/configs/mongo.js";

const app = express();

app.use(express.json());

app.use("/usuarios", usuarioRouter);
app.use("/mascotas",mascotasRouter);

app.get("/", function (req, res) {
	res.send("<h1>Aquí va el index</h1>");
});
   

async function startSever() {
	const isConnected = await connectDB();
	if (isConnected) {
		app.listen(PORT, () => {
			console.log(`Servidor activo en puerto: ${PORT}`);
		});
	} else {
		process.exit();
	}
}

startSever();
