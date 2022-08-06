const { Router }    = require("express")
const router        = Router();

// Importaciones internas
const usuarioControl = require("../controllers/users.controller");

router.get('/', usuarioControl.usuarioGet);
router.post('/', usuarioControl.usuarioPost);
router.put('/:id', usuarioControl.usuarioPut);
router.delete('/', usuarioControl.usuarioDel);
router.patch('/', usuarioControl.usuarioPat);

module.exports = router;