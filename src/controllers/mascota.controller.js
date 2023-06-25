import Mascota from "../models/mascota.model.js";
import { ObjectId } from "mongodb";

async function getListadoMascotas(req, res) {
  const mascotas = await Mascota.find();
  return res.status(200).json({ mascotas });
}

async function getMascotaPorId(req, res) {
  try{
  const idMascota = req.params.id;
  const filter = { _id: new ObjectId(idMascota) };

  const mascota = await Mascota.findOne(filter);

	if (mascota == null) {
		return res.status(404).json({ error: "no existe la mascota solicitada" });
	  }else{
	  	return res.status(201).json({ mascota});
	  }

}catch(e){
  return res.status(500).json({error:"Hubo un error con los datos solicitados. Inténtelo nuevamente"})
}
}

async function nuevaMascota(req, res) {
  
    const { nombre, descripcion, edad, especie, sexo, nroChip, fotos } =
      req.body;
  try {
    await Mascota.create({
      nombre: nombre,
      descripcion: descripcion,
      edad: edad,
      especie: especie,
      sexo: sexo,
      nroChip: nroChip,
      fotos: fotos,
    });
    
    return res.status(201).json({ success: true });

  } catch (error) {
    return res.status(500).json({ error: "No se pudo guardar la información. Inténtelo nuevamente" });
  }
}

async function borrarMascota(req, res) {
  const { id } = req.params;
  try {
    const filter = { _id: new ObjectId(id) };
    const result = await Mascota.findOne(filter);
    
    if (result == null) {
      return res.status(404).json({ error: "no existe la mascota solicitada" });
    }else{
      const mascota = await Mascota.findByIdAndRemove(id);
      return res.status(200).json({ success: "Mascota eliminada correctamente" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Hubo un error al eliminar la mascota seleccionada. Inténtelo nuevamente" });
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
  

export { getListadoMascotas, getMascotaPorId, nuevaMascota, borrarMascota, editarMascota };
