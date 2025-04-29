function Auto(marca, modelo, anio, color) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
  this.color = color;
}

const toyota = new Auto("toyota","yaris", 2013, 'gris plata')
const autos = [
  { id: 1, marca: "toyota", modelo: "corolla", anio: 2012, color: "rojo" },
  { id: 2, marca: "nissan", modelo: "versa", anio: 2015, color: "azul" },
  { id: 3, marca: "ford", modelo: "mustang", anio: 2013, color: "gris plata" },
  {
    id: 4,
    marca: "chevrolet",
    modelo: "camaro",
    anio: 2017,
    color: "amarillo",
  },
  { id: 5, marca: "honda", modelo: "civic", anio: 2022, color: "negro" },
  {
    id: 6,
    marca: "fiat",
    modelo: "cronos",
    anio: 2010,
    color: "blanco perla",
  },
  { id: 7, marca: "bmw", modelo: "serie 3", anio: 2020, color: "gris grafito" },
  { id: 8, marca: "audi", modelo: "a4", anio: 2011, color: "azul oscuro" },
  {
    id: 9,
    marca: "mercedes-benz",
    modelo: "clase c",
    anio: 2016,
    color: "plata",
  },
  {
    id: 10,
    marca: "volkswagen",
    modelo: "golf",
    anio: 2022,
    color: "verde oliva",
  },
];
const autosMayorVeinteDieciocho= autos.filter((auto)=> auto.anio > 2018)//meter esto dentro de una funcion y que pueda igresar igresar cualquier anio


console.log(autosMayorVeinteDieciocho);

// const destructuring = (parametroColor) => {
//   for (const auto of autos) {
//     const { marca, modelo, anio, color } = auto;
//     if (color == parametroColor) {
//       console.log(`El auto es: ${marca} ${modelo} ${anio} ${color}`);
//     }
//   }
// };

// destructuring("rojo");


// convertir la funcion e algo que me sirva para cualquier array de autos
function contarAutomovilesPorColor(colorAutomovil) {
  let contador = 0;
  autos.forEach(({ color }) => {
    if (colorAutomovil === color) {
      contador++;
    }
  });
  console.log(`Hay ${contador} automóviles de color ${colorAutomovil}.`);
}

contarAutomovilesPorColor("rojo")