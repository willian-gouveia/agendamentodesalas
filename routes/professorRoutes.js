const express = require('express');
const professorController = require('../controllers/professorController');

const router = express.Router();

router
    .route('/api/professor')
    .post(professorController.create)
    .get( professorController.read);
    
router
    .route('/api/professor/:id')
    //.get(professorController.readOne)
    .put(professorController.update)
    .delete(professorController.delete);

module.exports = router;
