const express = require('express');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router();

router
    .route('/api/usuario')
    .post(usuarioController.create)
    .get( usuarioController.read);

router
    .route('/api/usuario/login')
    .post(usuarioController.login)
    
router
    .route('/api/usuario/:id')
    //.get(usuarioController.readOne)
    .put(usuarioController.update)
    .delete(usuarioController.delete);

module.exports = router;