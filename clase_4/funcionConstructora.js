function Persona(nombre, apellido, edad) {
  this.nombre = nombre;//Javier Fiorela
  this.apellido = apellido;
  this.edad = edad;
  this.presentarse = function () {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  };
}
// {nombre:"kjhdkjhd",apellido:"jskjhdkjh", edad:34}

const persona1 = new Persona("Javier", "While", 35);
console.log(persona1);
console.log(persona1.nombre);
console.log(persona1["apellido"]);

const persona2 = new Persona("Fiorela", "Gutierrez", 23);
console.log(persona2);
console.log(persona2.nombre);
console.log(persona2["apellido"]);

persona1.presentarse()
persona2.presentarse()


console.log(persona1.edad);
