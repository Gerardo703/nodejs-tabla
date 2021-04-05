const { number, options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

// impriman la tabla del 5 por consola
console.clear();

//console.log(argv);

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'.rainbow))
    .catch(err => console.log( err ));
