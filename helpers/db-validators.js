const Role          = require("../models/role.model");
const Usuario       = require("../models/user.model");

const isValidRole = async (rol = '') => {

    if (rol === '') {
        return;
    }

    const existeRol = await Role.findOne( { nombre: rol } );
    if (!existeRol) {
        throw new Error(`El rol ingresado no es válido`);
    }
};

const emailExists = async (email = '') => {

    if (email === '') {
        return;
    }

    // Verificación de correo
    const correoExiste = await Usuario.findOne( { email } );

    if (correoExiste !== null ) {
        throw new Error(`El email ingresado ya está registrado`);
    }
}

const userExists = async (id = '') => {

    if (id === '') {
        return;
    }

    // Verificación de correo
    const usuarioExiste = await Usuario.findOne( { _id:id } );

    if (usuarioExiste === null ) {
        throw new Error(`El id ingresado no existe`);
    }
}

module.exports = {
    isValidRole,
    emailExists,
    userExists
}