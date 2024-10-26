const express = require('express');
const middlewareIsAdmin = require('../middleware/verifyTokenRoleIsAdmin')
const paginationMiddleware = require('../middleware/pagination');

const usuarioController = require('../controllers/usuarioController');

const router = express.Router();

router
    .route('/api/usuario')
    .post(usuarioController.create)
    .get(paginationMiddleware, middlewareIsAdmin, usuarioController.read);

router
    .route('/api/usuario/login')
    .post(usuarioController.login)
    
router
    .route('/api/usuario/:id')
    //.get(usuarioController.readOne)
    .put(usuarioController.update)
    .delete(usuarioController.delete);

module.exports = router;