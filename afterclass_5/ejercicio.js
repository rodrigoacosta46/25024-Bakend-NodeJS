const argumentos = process.argv.slice(2);
console.log(argumentos);

const [comando1, ...comandos] = argumentos;
// pasen el array de objetos de los autos
switch(comando1){
    case "GET":
        console.log("Todos lor ductos");
        break
    case "POST":
        console.log("Producto creado:" , comandos[0] );
        break
    case "PUT":
        console.log("Producto modificado su id es" , comandos[0] );
        break
}