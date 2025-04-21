const fs = require("fs");
// import fs from 'fs';
let texto = "Dentro de cada hombre existe una lucha entre el bien y el mal que no se resuelve"


fs.writeFile("./archivo.txt",texto , () => {
  try {
    console.log("Exito");
  } catch (error) {
    console.log(error);
  }
});
