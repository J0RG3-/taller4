import express from "express";
import { PORT } from "./src/configs/environment.js";
import connectDB from "./src/configs/mongo.js";
import cors from "cors";
//import routers
import usuarioRouter from "./src/routes/usuario.router.js";
import mascotasRouter from "./src/routes/mascota.router.js";
import authRouter from "./src/routes/auth.route.js";


//app
const app = express();
//conexion con bd.
connectDB();

app.use(cors())
app.use(express.json());

app.use("/usuarios", usuarioRouter);
app.use("/mascotas",mascotasRouter);
app.use("/auth",authRouter);

app.get("/", function (req, res) {
	res.send("<h1>Aquí va el index</h1>");
});
//escucha
app.listen(PORT,()=>{
	console.log(`servidor desplegado en el puerto ${PORT}`)
})
