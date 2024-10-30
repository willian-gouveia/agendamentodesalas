const express = require('express');
const middlewareIsAdmin = require('../middleware/verifyTokenRoleIsAdmin')
const paginationMiddleware = require('../middleware/pagination');

const agendamentoController = require('../controllers/agendamentoController');

const router = express.Router();

router
    .route('/api/agendamento')
    .post(agendamentoController.create)
    .get(paginationMiddleware, middlewareIsAdmin, agendamentoController.read);
    
router
    .route('/api/agendamento/:id')
    //.get(agendamentoController.readOne)
    .put(agendamentoController.update)
    .delete(agendamentoController.delete);

module.exports = router;