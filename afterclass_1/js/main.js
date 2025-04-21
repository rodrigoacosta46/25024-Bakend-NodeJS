console.log("Hola tarola");
// variables
let nombre; //declaracion
nombre = "Damaris"; //asignación
console.log(nombre);
nombre = 23; //reasignacion de valores
console.log(nombre);
// const
const PI = 3.14159; //inicializa
const personaje = {};

const array = [1, 2, 3, 4, 5, 6, 7];
array[0] = "Hola";
console.table(array);
// array = "Soy un array";
console.table(array);
// personaje=0

const suma = function (n1, n2) {
  console.log(n1 + n2);
};
//"resultado de una operacion"
suma(1, 3);
let numeros = [2, 4, 6, 8];
let suma = 0;

for (let i = 1; i < numeros.length; i++) {
	suma += numeros[i];
}

console.log("Suma:", suma); // Debería mostrar 20
