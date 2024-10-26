const express = require('express');
const middlewareIsAdmin = require('../middleware/verifyTokenRoleIsAdmin')
const paginationMiddleware = require('../middleware/pagination');

const professorController = require('../controllers/professorController');

const router = express.Router();

router
    .route('/api/professor')
    .post(professorController.create)
    .get(paginationMiddleware, middlewareIsAdmin, professorController.read);
    
router
    .route('/api/professor/:id')
    //.get(professorController.readOne)
    .put(professorController.update)
    .delete(professorController.delete);

module.exports = router;
