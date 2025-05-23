function exit(msg) {    //  Salir del programa
    console.log(msg);
    process.exit(1);
}

function fetchData(path, request, data) {
    fetch(`https://fakestoreapi.com/${path}`, {     //  De haber mas servicios, no es products hardcodeado
        method: request,
        ...data    //  Queda undefined de no ser request con body (solo POST en este caso)
    }).then(res => {
        return res.json();
    }).then(data => {
        console.log("Resultado: ", data)
    }).catch(err => {
        console.log("Error atrapado, detalles: ", err);
    });
}

const TERMINAL = process.argv.slice(2); //  Filtra valores basura
const [request, path, ...data] = TERMINAL;

if (TERMINAL.length === 0 || !request || !path) {
    exit("Proporcionar parametros: <Metodo> <Recurso> <Datos>(opcional)");
}

const ACTIONS = {   //  Objeto de acciones
    GET: () => {
        fetchData(path, request)
    },
    POST: () => {
        if (data === undefined || data.length === 0) exit("Datos invalidos: <Titulo> <Precio> <Categoria>");
        fetchData(path, request, {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: data[0],
                price: data[1],
                category: data[2]
            })
        });
    },
    DELETE: () => {
        fetchData(path, request);
    }
}

ACTIONS[request]()  //  Ejecuta la funcion dependiendo del 1er parametro