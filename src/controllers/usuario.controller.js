import Usuario from "../models/usuario.model.js";

async function getUsuarios(req, res) {
	try{
	const usuarios = await Usuario.find();
	return res.status(200).json({ usuarios });
	} catch (error) {
	return res.status(500).json({ error });
}
}

async function getUsuario(req, res) {
	try {
		const usuario = await User.findById(req.params.userId);
		return res.status(200).json({ usuario });
	} catch (error) {
		return res.status(500).json({ error });
	}

}

export {
	getUsuario,getUsuarios
	
};
