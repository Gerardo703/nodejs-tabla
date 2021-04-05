const argv = require('yargs')
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Número base para realizar la tabla de multiplicar'
    })
    .options('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla por consola'
    })
    .options('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Muestra hasta que número va la tabla'
    })
    .check( ( argv, options ) => {
        if( isNaN ( argv.b ) ){
            throw 'La base tiene que ser un número'
        }
        return true;
    } )
    .argv;

module.exports = argv;  