// nvm
// const fs = require("fs");
// const os = require("os");
// // puedo hacer destruturing
// // const math = require('./modulos/math')
// const { suma, resta, multi, divi } = require("./modulos/math");
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import math from "./modulos/math.js";
const {suma,resta, multi, divi}=math
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rutaDeArchivo = path.join(__dirname, "/index.js");
console.log(rutaDeArchivo);

console.log(math);
console.log(suma(2, 4));
console.log(resta(2, 4));
console.log(multi(2, 4));
console.log(divi(2, 4));

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.release());
// console.log(os.networkInterfaces());

// fs.writeFile("./archivo.txt", "hola", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Archivo creado");
// });
