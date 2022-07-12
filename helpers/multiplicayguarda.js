const fs = require('fs');
const colors = require('colors');

guardarMulti = (num = 5, hasta = 10, listar = false) => {

    return new Promise((rs, rj) => {
        let salida  = '';
        let ruta    = './adjuntos/';
        let archivo = `tabla-${ num }.txt`;

        for (let i = 1; i <= hasta; i++) {
            salida += (`${num} x ${i} = ${num * i}\n`);    
        }
        if (listar) {
            console.log(`*************************
            *****  Tabla del ${ num }  *****
            *************************`.blue);
            console.log(salida.green);
        }

        fs.writeFile(ruta+archivo, salida, (err) => {
            if (err) {
                rj(err);
            }
            rs(archivo);
        });
    });
}

module.exports = {
    guardarMulti
};