const express = require('express');
const middlewareIsAdmin = require('../middleware/verifyTokenRoleIsAdmin')
const paginationMiddleware = require('../middleware/pagination');

const salaController = require('../controllers/salaController');

const router = express.Router();

router
    .route('/api/sala')
    .post(salaController.create)
    .get(paginationMiddleware, middlewareIsAdmin, salaController.read);

router
    .route('/api/sala/:id')
    .put(salaController.update)
    .delete(salaController.delete);

module.exports = router;