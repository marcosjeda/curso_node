const { request, response } = require('express');

const usuarioController = {

    usuarioGet(rq = request, rs = response) {
        // parametros tipo /ruta/endpoint?id=1&otroParam=queseyo
        const { pagina = 1, limit = 10 } = rq.query;
        rs.json({
            'status': 'Ok',
            pagina,
            limit
        });
    },

    usuarioPost(rq = request, rs = response) {

        const { nombre, edad } = rq.body;

        rs.json({
            'status': 'Ok',
            nombre,
            edad
        });
    },

    usuarioPut(rq = request, rs = response) {
        const { id } = rq.params;
        rs.json({
            status:'Ok',
            message: 'Holi desde el PUT',
            id
        });
    },

    usuarioDel(rq = request, rs = response) {
        rs.send('Holi DELETE desde el controller');
    },

    usuarioPat(rq = request, rs = response) {
        rs.send('Holi PATCH desde el controller');
    },
};

module.exports = usuarioController;