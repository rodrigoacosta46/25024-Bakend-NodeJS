// declaracion
// function saludar() {
//   // bloque de ejecucion
//   console.log("Hola como estan?");
// }

// // funcion anonima
// const saludar = function() {
//   console.log("Hola como estan?");
// };
// flecha
const saludar = () => {
  console.log("Hola como estan?");
};
// invocacion
// saludar();
// saludar();
// saludar();
// saludar();
// saludar();

const saludarConParametros = (parametro) => {
  console.log("Hola, " + parametro);
};
// saludarConParametros("Javier While");
// saludarConParametros("Axel");
// saludarConParametros("Triana");
// saludarConParametros(false);
const add = (num1, num2) => {
  if (!isNaN(num1) && !isNaN(num2)) {
    console.log(num1 + num2);
  } else {
    console.log("error");
  }
};
const substract = (num1, num2) => {
  if (!isNaN(num1) && !isNaN(num2)) {
    return num1 - num2;
  } else {
    return "Error";
  }
};

// add(1,3)
// add(0,"false")
// add("1","1")

// console.log(substract(1, 4));
// console.log(substract(1, "flase"));
let resultado = substract(1, "laksks");
// console.log(resultado);

const multi = (num1, num2) => num1 * num2;
// console.log(multi(3, "locro"));
//HOF
function saludo(nombre) {
  return "Hola " + nombre;
}
function procesarNombre(nombre, callback) {
  return callback(nombre); //saludo(nombre)
}
//boton.addEventListener('click',()=>{funcionalidad})
// console.log(procesarNombre("Gabriel", saludo));

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//agrrara al final push
console.log(array);
array.push(1, 3, 5, 2, 7);
array.unshift(33);
//quitar
array.pop();
array.shift();
array.splice(0, 3);

console.log(array);

const encontrado = array.find((item) => {
  return item > 4;
});
const filtrado = array.filter((item) => {
  return item > 40;
});
const nuevoArray = array.map((item) => {
  return item * 40;
});
console.log(array);

console.log(nuevoArray);
