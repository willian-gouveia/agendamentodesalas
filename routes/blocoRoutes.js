const express = require('express');
const middlewareIsAdmin = require('../middleware/verifyTokenRoleIsAdmin')
const paginationMiddleware = require('../middleware/pagination');

const blocoController = require('../controllers/blocoController');

const router = express.Router();

router
    .route('/api/bloco')
    .post(blocoController.create)
    .get(paginationMiddleware, middlewareIsAdmin, blocoController.read);

router
    .route('/api/bloco/:id')
    .put(blocoController.update)
    .delete(blocoController.delete);

module.exports = router;