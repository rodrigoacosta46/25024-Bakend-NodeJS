function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  if (b == 0) {
    return "Error, division por cero";
  }
  return a / b;
}

function calcular(a, b, callback) {
  // validar el callback
  return callback(a, b);//sumar(a,b),restar(a,b)
}

const suma = calcular(4, 3, sumar);
console.log(suma);

const resta = calcular(4, 3, restar);
console.log(resta);
const divi1 = calcular(0, 3, dividir);
console.log(divi1);
const divi2 = calcular(4, 0, dividir);
console.log(divi2);
