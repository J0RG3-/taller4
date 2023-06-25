import Usuario from "../models/usuario.model.js"
import bcrypt from "bcrypt"

export async function registrar(req, res) {
	try {
		const { nombre, email, password} = req.body;

		const nuevoUsuario = await Usuario.create({
			nombre: nombre,
			email: email,
			password: await passwordEncrypt(password),
		});
		return res.status(201).json({ response: nuevoUsuario });

	} catch (error) {
		return res.status(500).json({ error:"Hubo un error. Inténtalo de nuevo" });
	}
}

export async function login(req, res){
    try{
        const {password, email} = req.body;
        const usuario = await Usuario.findOne(
            {
                email:email
            });

        if(!usuario){
            return res.status(500).json("el usuario no existe");
        }

        if(await comparePassword(password,usuario.password)) return res.status(200).json("logeado!");
        else return res.status(400).json("Error en las credenciales de acceso"); 
    }catch(error){
        return res.status(500).json("Hubo un error. Inténtalo de nuevo")
    }
}

async function passwordEncrypt(password){
	return await bcrypt.hash(password,10);
}
async function comparePassword(password, encryptedPassword){
	return await bcrypt.compare(password, encryptedPassword)
}