const { Router }    = require("express");
const { check }     = require("express-validator");
const router        = Router();

// Importaciones internas
const usuarioControl    = require("../controllers/users.controller");
const { isValidRole, emailExists, userExists }   = require("../helpers/db-validators");
const validacion        = require('../middlewares/user.validator');

router.get('/', usuarioControl.usuarioGet);

router.post('/', [
    check('nombre', 'Debe ingresar un nombre').not().isEmpty(),
    check('email', 'El correo ingresado no es válido').isEmail().custom( emailExists ),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min:6 }),
    //check('rol', 'El rol ingresado no es válido').isIn([ 'ADMIN_ROLE', 'USER_ROLE' ]),
    check('rol').not().isEmpty().custom( isValidRole ),
    validacion.validarCampos
], usuarioControl.usuarioPost );

router.put('/:id', [
    check('id', 'El ID ingresado no es válido').isMongoId()
    .custom( userExists ),
    check('rol').custom( isValidRole ),
    validacion.validarCampos
], usuarioControl.usuarioPut);

router.delete('/:id',  [
    check('id', 'El ID ingresado no es válido').isMongoId()
    .custom( userExists ),
    validacion.validarCampos
], usuarioControl.usuarioDel);

router.patch('/', usuarioControl.usuarioPat);

module.exports = router;