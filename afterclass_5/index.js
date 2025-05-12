// commader
const argumentos = process.argv.slice(2);
console.log(argumentos);
// console.log(argumentos[0]);
// console.log(argumentos[1]);
// console.log(argumentos[2]);
const [comando1,...comandos] = argumentos;
console.log(comando1);
// console.log(comando2);
// if(comando1 == 'saludo'){
//     console.log('Hola como estas?');
// }
// if(comando2 == 'adios'){
//     console.log('Chau nos vemos');
// }
if(comando1 == 'desarrollo'){
    console.log('Servidor corriendo en modo desarrollo en el puerto', comandos[0]);
}
if(comando1 == 'testing'){
    
    console.log("Servidor corriendo en modo testing en el puerto", comandos[0]);
}
if(comando1 == 'stage'){
    
    console.log("Servidor corriendo en modo stage en el puerto", comandos[0], 'DB: ', comandos[1]);
}
if(comando1 == 'produccion'){
    
    console.log('Servidor corriendo en modo produccion');
}

