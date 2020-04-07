const {
  crearArchivo: createFile,
  listarTabla,
} = require("./multiplicar/multiplicar");

const argv = require('./config/yargs').argv
const colors = require('colors')

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite);
    break;
  case "crear":
    createFile(argv.base, argv.limite)
      .then((archivo) =>
        console.log(`Archivo ${archivo} creado exitosamente!!!`)
      )
      .catch((err) => console.log(err));

    break;
  default:
    console.log("Comando no reconocido");
    break;
}
