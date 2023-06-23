import Usuario from "../models/usuario.model.js";

async function getUsuarios(req, res) {
	const usuarios = await Usuario.find().populate();
	return res.status(200).send({ usuarios });
}

async function getUsuario(req, res) {
	try {
		const usuario = await User.findById(req.params.userId).populate(
		);
		return res.status(200).send({ usuario });
	} catch (error) {
		return res.status(500).send({ error });
	}

}

async function nuevoUsuario(req, res) {
	try {
		const nuevoUsuario = await Usuario.create({
			nombre: req.body.nombre,
			apPaterno: req.body.apPaterno,
			apMaterno: req.body.apMaterno,
			email: req.body.email,
			password: req.body.password,
		});
		return res.status(201).send({ response: nuevoUsuario });
	} catch (error) {
		return res.status(500).send({ error });
	}
}

export {
	getUsuario,getUsuarios,nuevoUsuario
	
};
