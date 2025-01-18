//! JSON -> JAVASCRIPT OBJECT NOTATION
// OBJETO EN DONDE VAMOS A GUARDAR INFORMACIÓN, SE UTILIZA PARA MANDAR INFORMACIÓN DE UN SITIO A OTRO

const datos = `
    {
        "id": 1,
        "nombre": "Carlos Arturo",
        "suscriptor_activo": true,
        "posts": [
            {
                "id": 1,
                "titulo": "Primer Post",
                "texto": "Texto..."
            },
            {
                "id": 2,
                "titulo": "Segundo Post",
                "texto": "Texto Dos..."
            }
        ]
    }
`;

const objeto = JSON.parse(datos);
console.log(objeto);
console.log(objeto.nombre);


// PASAR OBJETO A JSON 
const usuario = {
    nombre: "carlos",
    correo: "correo@correo.com",
    coloresFavoritos: ["azul", "rojo", "negro"]
}

console.log(JSON.stringify(usuario));
