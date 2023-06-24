import Usuario from "../models/usuario.model.js";

async function getUsuarios(req, res) {
	const usuarios = await Usuario.find();
	return res.status(200).json({ usuarios });
}

async function getUsuario(req, res) {
	try {
		const usuario = await User.findById(req.params.userId);
		return res.status(200).json({ usuario });
	} catch (error) {
		return res.status(500).json({ error });
	}

}

async function nuevoUsuario(req, res) {
	try {
		const { nombre, apPaterno, apMaterno, email, password} = req.body;

		const nuevoUsuario = await Usuario.create({
			nombre: nombre,
			apPaterno: apPaterno,
			apMaterno: apMaterno,
			email: email,
			password: password,
		});
		return res.status(201).json({ response: nuevoUsuario });

	} catch (error) {
		return res.status(500).json({ error });
	}
}

export {
	getUsuario,getUsuarios,nuevoUsuario
	
};
