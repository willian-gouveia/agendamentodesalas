const express = require('express');
const middlewareIsAdmin = require('../middleware/verifyTokenRoleIsAdmin')
const paginationMiddleware = require('../middleware/pagination');

const statusController = require('../controllers/statusController');

const router = express.Router();

router
    .route('/api/status')
    .post(statusController.create)
    .get(paginationMiddleware, middlewareIsAdmin, statusController.read);

router
    .route('/api/status/:id')
    .put(statusController.update)
    .delete(statusController.delete);

module.exports = router;