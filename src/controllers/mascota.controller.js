import Mascota from "../models/product.model.js";

async function getMascotas(req, res) {
	const mascotas = await Mascota.find();
	return res.status(200).send({ Mascota });
}

async function getMascota(req, res) {
	const idMascota = req.params.id;

	const mascota = await Mascota.findById(idMascota);
	return res.status(200).send({ product });
}

async function nuevaMascota(req, res) {
	try {
		const nuevaMascota = await Mascota.create({
			nombre: req.body.nombre,
			descripcion: req.body.descripcion,
			edad: req.body.edad,
			especie: req.body.especie,
			sexo: req.body.sexo,
			nroChip: req.body.nroChip,
			fotos: req.body.fotos,


		});
		return res.status(201).send({ response: nuevaMascota });
	} catch (error) {
		return res.status(500).send({ error });
	}
}


export async function borrarMascota(req, res){
	const idMascota = req.params.id;

	const mascota = await Mascota.findById(idMascota);

	if (!mascota){
		return res.status(404).send({error: "No encontrado"})
	}

	await mascota.delete();

	return res.status(204).send();
}

export {
	getMascotas,getMascota,nuevaMascota,borrarMascota
	
};