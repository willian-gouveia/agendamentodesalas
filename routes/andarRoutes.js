const express = require('express');
const middlewareIsAdmin = require('../middleware/verifyTokenRoleIsAdmin')
const paginationMiddleware = require('../middleware/pagination');

const andarController = require('../controllers/andarController');

const router = express.Router();

router
    .route('/api/andar')
    .post(andarController.create)
    .get(paginationMiddleware, middlewareIsAdmin, andarController.read);

router
    .route('/api/andar/:id')
    .put(andarController.update)
    .delete(andarController.delete);

module.exports = router;