//! UNDEFINED -> Se asigna automáticamente al crear una variable
let cliente;
console.log(cliente); //Devuelve undefined
console.log(typeof cliente); //Devuelve undefined

//! NULL -> VALOR NULO O VACIO, ESTE SE ASIGNA
const nulo = null

//! Boolean -> true/false

//! Number -> todos los numeros se tratán como number
const numero1 = -100;
const numero2 = 20.0;

//! Strings -> Cadenas de textos

//! BigInt -> Representa numeros muy grandes, estos no se pueden mezclar con numeros normales, para que funcione habria que convertirlo a Number()
const numeroGrande = BigInt(3929482849829439284929);
console.log(typeof numeroGrande); //Devuelve bigint

//! Symbol -> Es un dato único
const primeroSymbol = Symbol(30)
const segundoSymbol = Symbol(30)
console.log(primeroSymbol === segundoSymbol) //Devuelve false
console.log(primeroSymbol.valueOf()) //Devuelve Symbol(30)