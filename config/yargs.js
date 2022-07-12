const argv = require('yargs')
            .options({'b': {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'numero del cual se generará la tabla de multiplicar'
            },
            'l': {
                alias: 'listar',
                type: 'boolean',
                demandOption: false,
                default: false,
                describe: 'listar la salida que se escribe en el archivo por la consola'
            },
            'h': {
                alias: 'hasta',
                type: 'number',
                demandOption: false,
                default: 10,
                describe: 'Establece hasta que numero se multiplica'
            }})
            .check((argv, opts) => {
                if (isNaN(argv.b)) {
                    throw 'ERROR: La base debe ser un número';
                }
                if (isNaN(argv.h)) {
                    throw 'ERROR: El límite debe ser un número';
                }
                return true;
            })
            .argv;

module.exports = argv;