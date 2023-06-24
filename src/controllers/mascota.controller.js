import Mascota from "../models/mascota.model.js";
import { ObjectId } from "mongodb";

async function getMascotas(req, res) {
  const mascotas = await Mascota.find();
  return res.status(200).json({ mascotas });
}

async function getMascota(req, res) {
  const idMascota = req.params.id;

  const mascota = await Mascota.findById(idMascota);
  return res.status(200).json({ mascota });
}

async function nuevaMascota(req, res) {
  try {
    const { nombre, descripcion, edad, especie, sexo, nroChip, fotos } =
      req.body;

    const nuevaMascota = await Mascota.create({
      nombre: nombre,
      descripcion: descripcion,
      edad: edad,
      especie: especie,
      sexo: sexo,
      nroChip: nroChip,
      fotos: fotos,
    });

	if (!idMascota) {
		return res.status(404).json({ error: "no eliminaste na xd" });
	  }
    return res.status(201).json({ response: nuevaMascota });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function borrarMascota(req, res) {
  try {
    const { id } = req.params;
    console.log(id);
    const mascota = await Mascota.findByIdAndRemove(id);

    if (!mascota) {
      return res.status(404).json({ error: "no existe la mascota solicitada" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error });
  }
}


async function editarMascota(req, res) {
	try {
		const { id } = req.params;
	  	const {nombre, descripcion, edad, especie, sexo, nroChip, fotos } = req.body;
  
	  const filter = { _id: new ObjectId(id) };

	  const update = {
		$set: {
		  nombre: nombre,
		  descripcion: descripcion,
		  edad: edad,
		  especie: especie,
		  sexo: sexo,
		  nroChip: nroChip,
		  fotos: fotos,
		},
	  };
  
	  const result = await Mascota.findOne(filter);
	  if (result == null) {
		return res.status(404).json({ error: "no existe la mascota solicitada" });
	  }else{
	  	await Mascota.updateOne(filter, update);
	  	return res.status(201).json({ response: "Mascota editada correctamente"});
	  }
	} catch (error) {
	  console.error("Error:", error);
	  return res.status(500).json({ error });
	}
  }
  

export { getMascotas, getMascota, nuevaMascota, borrarMascota, editarMascota };
