// objetos literales {}
const personaje = {
  nombre: "Homero",
  apellido: "Simpson",
  casado: true,
  edad: 38,
};
// console.log(personaje.nombre);
// console.log(personaje.apellido);
// console.log(personaje.edad);
// console.log(personaje.casado);
// console.log(personaje["casado"]=false);

// personaje.casado="si"
console.log(personaje);

const personaje2 = {
  nombre: "Ned",
  apellido: "Flanders",
  edad: 60,
  diLoTuyo: function () {
    console.log("Hola tarola");
  },
};

personaje2.vecino = personaje;
console.log(personaje2);
personaje2.diLoTuyo()


