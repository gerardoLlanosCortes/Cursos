// const tecnologias = ["HTML", "CSS", "JS", "REACT"]

//! Añadir elementos
// const nuevoArreglo = [...tecnologias, "NODE"]
// console.log(nuevoArreglo)

// const nuevoArreglo2 = ["PYTHON", ...nuevoArreglo]
// console.log(nuevoArreglo2)

//! Eliminar elementos
// const arregloFiltrado = tecnologias.filter((tecnologia) => {
//     return tecnologia !== "CSS"
// })
// console.log(arregloFiltrado) //Devuelve el arreglo sin CSS

//! Reemplazar elementos
// const arregloModificado = tecnologias.map((tecnologia) => {
//     if(tecnologia === "HTML"){
//         return "NODE"
//     } else{
//         return tecnologia
//     }
// })
// console.log(arregloModificado) //Cambia HTML por NODE

//************* DESTRUCTURING DE ARREGLOS  **************

// const tecnologias = ["HTML", "CSS", "JS", "REACT"]
// const [html, node] = tecnologias
// console.log(html, node) //Los trae por posiciones por lo que node = CSS

// const [,,,react] = tecnologias
// console.log(react) //Usando las comas evitamos crear variables innecesarias

//************* ITERADORES DE ARREGLOS  **************
// const tecnologias = ["HTML", "CSS", "JS", "REACT"]

// //! forEach -> Acceder a cada elemento del arreglo
// tecnologias.forEach((tech) => {
//     console.log(tech)
// })

// //! map -> Accede a cada elemento y Crea un nuevo arreglo si se retorna
// const nuevoArreglo = tecnologias.map(tech => {
//     return tech
// })
// console.log(nuevoArreglo) //Devuelve el nuevo arreglo creado

//************* METODOS DE ARREGLOS  **************
const tecnologias = ["HTML", "CSS", "JS", "REACT"]
const numeros = [10,20,30]

let nuevoArray

//! Includes -> comprueba si un elemento existe en el arreglo, devuelve true o false
const resultado = tecnologias.includes("REACT")
console.log(resultado) //Devuelve True o False

//! some -> si al menos un elemento del arreglo cumple con la condicion, devuelve true o false
const resultadoSome = numeros.some(numero => numero < 20)
console.log(resultadoSome) //Devuelve true por el 10

//! find -> Devuelve el primer elemento que cumple con la condicion
const resultadoFind = numeros.find(numero => numero > 15)
console.log(resultadoFind) //Devuelve 20

//! Every -> Devuelve true o false si todos cumplen la condicion
const resultadoEvery = numeros.every(numero => numero > 9)
console.log(resultadoEvery) //Devuelve True

//! Reduce -> Va acumulando en el total
const resultadoReduce = numeros.reduce((total, numero) => numero + total, 0)
console.log(resultadoReduce) //Devuelve 60, la suma de 10 + 20+ 30