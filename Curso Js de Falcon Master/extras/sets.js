//!SET -> Arreglo que no permite repetidos

const colores = ["Rojo", "Verde", "Azul", "Rojo"];
console.log(colores);

const coloresSet = new Set(["Rojo", "Verde", "Azul", "Rojo"]);
console.log(coloresSet);
coloresSet.add("Amarillo")
coloresSet.add(4)

coloresSet.forEach((color) => {
    console.log(color);
})
console.log(coloresSet);
