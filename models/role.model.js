const { Schema, model } = require('mongoose');

const roleSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    }
});

// Mongoose coloca una 's' al final del nombre del modelo para crear la colección.
module.exports = model('Role', roleSchema);