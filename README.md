# taller4

integrantes: Erick Martínez, Jorge Cisterna

- Registro POST /auth/register
- Crear mascota POST /mascota/agregar --> Tuvimos que agregar idUsuario al Schema de Mascota para asociarla a un determinado usuario (dueño)
- Editar mascota PUT /mascota/editar/:mascotaId
- Eliminar mascota DELETE /mascota/eliminar/:mascotaId
- Listar mascotas GET /listado

Agregamos también:
GET /usuarios --> lista los usuarios existentes
GET /usuarios/:idUsuario --> para consultar un usuario específico


ejemplos:

Creación de nueva mascota:

{
    "idUsuario":"64965c3ebd439513b46cab94",
    "nombre": "mascotaDeEjemplo",
    "descripcion": "descripción de ejemplo",
    "edad": 1,
    "especie": "especieDeLaMascota",
    "sexo": "SexoDeLaMascota",
    "nroChip": "987654321",
    "fotos": [
        "https://ejemplo.com/foto1.jpg"
        ]
}
