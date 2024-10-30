const express = require('express');
const middlewareIsAdmin = require('../middleware/verifyTokenRoleIsAdmin')
const paginationMiddleware = require('../middleware/pagination');

const cargoController = require('../controllers/cargoController');

const router = express.Router();

router
    .route('/api/cargo')
    .post(cargoController.create)
    .get(paginationMiddleware, middlewareIsAdmin, cargoController.read);

router
    .route('/api/cargo/:id')
    .put(cargoController.update)
    .delete(cargoController.delete);

module.exports = router;