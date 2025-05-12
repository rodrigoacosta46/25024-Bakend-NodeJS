// function cb(){
//     console.log("Hola mundo");

// }

// setTimeout(cb, 3000)
// setTimeout(function() {
//   console.log("Hola mundo");
// }, 3000);
const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 45000, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 60500, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 28000, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 22000, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 18000, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 9000, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 95000, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 45800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 25000,
    img: "micropigmentacion.jpeg",
  },
];

const getServicios = (arr) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (arr) {
        resolve(arr);
      } else {
        reject("Error al cargar los datos");
      }
    }, 2500);
  });
};
let catalogo=[]
// getServicios(servicios)
//   .then((response) => {
//     catalogo = response
//     console.log(catalogo.slice(0,5));
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// fetch("https://rickandmortyapi.com/api/character")
// .then(res => {
//   if (!res.ok) { 
//     throw new Error("Error en la respuesta de la API");
//   }
//   return res.json(); 
// })
// .then(data => {
//   console.log("Personajes", data.results); 
// })
// .catch(error => {
//   console.error("Error al obtener personajes", error);
// });

function buscarPorID(arr,id){
return arr.find(item=>item.id == id)
}




const servicio=buscarPorID()
console.log(servicio);
