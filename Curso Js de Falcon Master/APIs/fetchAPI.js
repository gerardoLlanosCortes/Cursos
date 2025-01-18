const endpoint = "https://api.npoint.io/9e0b86c91a4321757362";

// fetch(endpoint)
//   .then((res) => {
//     console.log("El servidor respondió");
//     // console.log(res);
//     const promesa = res.json();

//     promesa
//       .then((datos) => {
//         console.log(datos);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });


const obtenerDatos = async () => {
    const respuesta = await fetch(endpoint)
    const datos = await respuesta.json()
    console.log(datos);
}
obtenerDatos()
