class Auto {
  constructor(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }
  mostrar = function () {
    console.log(`Hola, soy ${this.marca} ${this.modelo} ${this.anio}`);
  };
}

const auto1 = new Auto("Toyota", "Yaris", 2025);
console.log(auto1.marca);
console.log(auto1.modelo);
auto1.mostrar();

// const marca = auto1.marca
// const modelo = auto1.modelo
auto1.precio = 2300000;
// destructuring
const { anio, marca } = auto1;
console.log(anio);

console.log(marca);
// console.log(precio);

for (const key in auto1) {
  console.log(key, auto1[key]);
  // auto1.key
}

const precios = [2340, 3095, 6183, 8589];

const [primero, ,segundo, tercero] = precios;
// console.log(precios[2]);

console.log(primero);
console.log(segundo);
console.log(tercero);
