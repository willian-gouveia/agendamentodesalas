const express = require('express');
const middlewareIsAdmin = require('../middleware/verifyTokenRoleIsAdmin')
const paginationMiddleware = require('../middleware/pagination');

const cursoController = require('../controllers/cursoController');

const router = express.Router();

router
    .route('/api/curso')
    .post(cursoController.create)
    .get(paginationMiddleware, middlewareIsAdmin, cursoController.read);

router
    .route('/api/curso/:id')
    .put(cursoController.update)
    .delete(cursoController.delete);

module.exports = router;