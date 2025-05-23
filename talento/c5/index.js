// console.log(process.argv);
// console.log(args[1]);

function exit(msg) {
    console.log(msg);
    process.exit(1);
}

const args = process.argv.slice(2);

args.length === 0 && exit("Inserte alguno de los argumentos: GET, POST, PUT, DELETE");

const actions = {
    GET: () => console.log("Toma un dato"),
    POST: (data) => console.log(`Recibimos el dato ${data} exitosamente`),
    PUT: (id) => console.log(`Se actualizo el item con el id ${id}`),
    DELETE: (id) => console.log(`Eliminamos el item con el id ${id}`)
};

!(args[0] in actions) && exit("Argumento inválido");


actions[args[0]](args[1]);