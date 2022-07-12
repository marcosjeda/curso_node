const { guardarMulti }  = require('./helpers/multiplicayguarda');
const argv              = require('./config/yargs');
const colors            = require('colors');

console.clear();

//console.log(argv);

guardarMulti(argv.b, argv.h, argv.l)
    .then(archivo => console.log(`${archivo} creado correctamente`.bgGreen))
    .catch(err => console.error(err));