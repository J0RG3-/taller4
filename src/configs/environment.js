import dotenv from "dotenv";

dotenv.config();
const usuarioDB=process.env.USER;
const passwordDB=process.env.PASS;


const MONGO_URI = `mongodb+srv://${usuarioDB}:${passwordDB}@cluster0.xtbjrzg.mongodb.net/Adopcion?retryWrites=true&w=majority`;
const PORT = process.env.PORT;

export { MONGO_URI, PORT };
