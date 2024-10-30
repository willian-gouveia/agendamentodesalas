const express = require('express');
const middlewareIsAdmin = require('../middleware/verifyTokenRoleIsAdmin')
const paginationMiddleware = require('../middleware/pagination');

const turnoController = require('../controllers/turnoController');

const router = express.Router();

router
    .route('/api/turno')
    .post(turnoController.create)
    .get(paginationMiddleware, middlewareIsAdmin, turnoController.read);

router
    .route('/api/turno/:id')
    .put(turnoController.update)
    .delete(turnoController.delete);

module.exports = router;