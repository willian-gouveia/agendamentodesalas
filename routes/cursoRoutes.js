const express = require('express');
const cursoController = require('../controllers/cursoController');

const router = express.Router();

router
    .route('/api/curso')
    .post(cursoController.create)
    .get( cursoController.read);

router
    .route('/api/curso/:id')
    .put(cursoController.update)
    .delete(cursoController.delete);

module.exports = router;