import exit from "./utils/exit.js"

function fetchData(path, request, data) {
    fetch(`https://fakestoreapi.com/${path}`, {     //  De haber mas servicios, no es products hardcodeado
        method: request,
        ...data    //  Queda undefined de no ser request con body (solo POST en este caso)
    }).then(res => {
        return res.json();
    }).then(data => {
        console.log("Resultado: ", data);  //  Es mas escalable que hardcodear la llave para imprimirla
    }).catch(err => {
        console.log("Error atrapado intente ingresando un servicio valido, detalles: ", err.message || err);
    });
}

const TERMINAL = process.argv.slice(2); //  Filtra valores basura
const [request, path, ...data] = TERMINAL;

const ACTIONS = {   //  Objeto de acciones
    GET: () => {
        fetchData(path, request)
    },
    POST: () => {
        if (data.length < 3) exit("Para ejecutar POST, debe completar los datos: <Titulo> <Precio> <Categoria>");

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

try {
    ACTIONS[request]()  //  Ejecuta la funcion dependiendo del 1er parametro
} catch {
    exit(
        `
        Parametros otorgados invalidos, validos: GET POST DELETE
        Consulta valida: <HTTP> <SERVICIO> <DATOS>(opcional)
        ...Por el momento el unico servicio disponible es "products"
        `
    );
}
