const { Router }    = require("express")
const router        = Router();

// Importaciones internas
const usuarioControl = require("../controllers/users.controller");

router.get('/holi', usuarioControl.usuarioGet);
router.post('/holi', usuarioControl.usuarioPost);
router.put('/holi', usuarioControl.usuarioPut);
router.delete('/holi', usuarioControl.usuarioDel);
router.patch('/holi', usuarioControl.usuarioPat);

module.exports = router;