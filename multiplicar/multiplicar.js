const fs = require("fs");
const colors = require('colors')

const crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`La base ${base} no es un numero, gilipollas`);
    }

    let datos = "";

    for (let i = 1; i <= limite; i++) {
      datos += `${base} * ${i} = ${base * i}\n`;
    }
    fs.writeFile(`tablas/tabla-${base}.txt`, datos, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`tabla-${base}.txt`);
      }
    });
  });
};

const listarTabla = (base, limite = 10) => {
    console.log('.:. ====================== .:.'.green)
    console.log(` |      Tabla del ${base}        |`.blue)
    console.log('.:. ********************** .:.'.green)
    console.log('')
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}\n`)
  }
};

module.exports = { crearArchivo, listarTabla };
