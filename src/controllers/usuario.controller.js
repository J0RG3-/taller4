import Usuario from "../models/user.model.js";

export async function getUsers(req, res) {
	const usaurios = await Usuario.find().populate("address jobs");
	return res.status(200).send({ users });
}

export async function getUsuario(req, res) {
	try {
		const usuario = await User.findById(req.params.userId).populate(
		);
		return res.status(200).send({ usuario });
	} catch (error) {
		return res.status(500).send({ error });
	}
}
