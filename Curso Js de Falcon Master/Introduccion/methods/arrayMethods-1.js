const colores = ["Rojo", "Verde", "Azul"];

//! lenght -> cantidad de elementos de un arreglo
// PROPIEDAD
console.log(colores.length);



//! toString -> arreglo a cadena de texto
// METODO
// document.body.innerHTML = colores.toString();
console.log(colores.toString());



//! join -> transforma a texto y separa por lo indicado}
console.log(colores.join(" - "));



//! sort -> ordenar arreglo en forma alfabetica o numerica
//! MODIFICA EL ARREGLO ORIGINAL
const letras = ["b", "f", "e", "a"];
console.log(letras.sort());

const numeros = [4, 2, 7, 1];
console.log(numeros.sort());



//! reverse -> como sort pero al revés
//! MODIFICA EL ARREGLO ORIGINAL
console.log(letras.reverse());
console.log(numeros.reverse());



//! concat -> junta dos arreglos en 1
const arreglo1 = [1, 2, 3];
const arreglo2 = ["a", "b", "c"];
const arreglo3 = arreglo1.concat(arreglo2)
console.log(arreglo3);



//! push -> agrega un elemento al final
colores.push("Amarillo")
console.log(colores);


//! pop -> elimina el ultimo 
colores.pop()
console.log(colores);

