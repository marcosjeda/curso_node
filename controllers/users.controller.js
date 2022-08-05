const { request, response } = require('express');

const usuarioController = {

    usuarioGet(rq = request, rs = response) {
        rs.send('Holi desde el controller');
    },

    usuarioPost(rq = request, rs = response) {
        rs.send('Holi POST desde el controller');
    },

    usuarioPut(rq = request, rs = response) {
        rs.send('Holi PUT desde el controller');
    },

    usuarioDel(rq = request, rs = response) {
        rs.send('Holi DELETE desde el controller');
    },

    usuarioPat(rq = request, rs = response) {
        rs.send('Holi PATCH desde el controller');
    },
};

module.exports = usuarioController;