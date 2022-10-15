const { request, response } = require('express');
const bcrypt                = require('bcryptjs');
const validator             = require('express-validator');

const Usuario       = require('../models/user.model');

const usuarioController = {

    async usuarioGet(rq = request, rs = response) {
        // parametros tipo /ruta/endpoint?id=1&otroParam=queseyo
        const { pagina = 0, limit = 0 } = rq.query;
        const query = { estado: true };

        //const usuarios  = await Usuario.find(query).limit( Number(limit) ).skip( Number((pagina <= 0 ? 0 : pagina-1)*limit) );
        //const total     = await Usuario.count(query);
        const resp = await Promise.all([
            Usuario.find(query).limit( Number(limit) ).skip( Number((pagina <= 0 ? 0 : pagina-1)*limit) ),
            Usuario.count(query)
        ]);

        const [usuarios, total] = resp;

        rs.json({
            estado: true,
            pagina,
            limit,
            total,
            usuarios,
        });
    },

    async usuarioPost(rq = request, rs = response) {
        
        const { nombre, password, email, rol } = rq.body;
        const usuario   = new Usuario({ nombre, password, email, rol });

        let estado = false;

        // Encriptacion de la pass
        const salt          = await bcrypt.genSalt(10);
        usuario.password    = bcrypt.hashSync( password, salt );
        
        // Guardado del registro
        try {
            await usuario.save();
            mensaje = 'Usuario creado correctamente';
            estado  = true;
        } catch (error) {
            mensaje = 'Error al crear el usuarioņ\n' + error;
        }

        rs.json({
            estado,
            mensaje,
            usuario
        });
    },

    async usuarioPut(rq = request, rs = response) {
        const { id } = rq.params;

        const { _id, password, google, ...resto } = rq.body;

        if (password) {
            // Encriptacion de la pass
            const salt          = await bcrypt.genSalt(10);
            resto.password    = bcrypt.hashSync( password, salt );
        }

        const usuario = await Usuario.findByIdAndUpdate( id, resto );

        rs.json({
            estado: true,
            id
        });
    },

    async usuarioDel(rq = request, rs = response) {
        const { id } = rq.params;

        // Eliminación permanente
        //const usuario = Usuario.findByIdAndDelete( id );

        // Eliminación simbólica
        const usuario = await Usuario.findByIdAndUpdate( id, { estado: false } );
        rs.json({
            estado: true,
            mensaje: 'Usuario eliminado correctamente',
            id
        });
    },

    usuarioPat(rq = request, rs = response) {
        rs.send('Holi PATCH desde el controller');
    },
};

module.exports = usuarioController;