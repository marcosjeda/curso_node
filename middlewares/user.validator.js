const { validationResult } = require('express-validator');

validarCampos = (rq, rs, next) => {
    // Validacion del middleware
    const errors    = validationResult(rq);
    if (!errors.isEmpty()) {
        let msjs = errors.errors.map(elem => {
            let {param, msg} = elem;
            let obj = {};
            obj[param] = msg;
            return obj;
        });
        return rs.status(400).json({
            estado: false,
            mensaje: 'Error de validacion',
            msjs
        });
    }
    next();
}


module.exports = {
    validarCampos
}