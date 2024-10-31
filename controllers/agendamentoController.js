const mysql = require('mysql');
const db = require('../models');

const JsonError = require('../errors/JsonError');

module.exports = {
    create(request, response) {
        const { nome_Prof, cursoId, data, salaId, andarId, blocoId, turnoId, statusId } = request.body;
        
        console.log(request.body)
      

            db.getConnection().query(`INSERT INTO agendamento (nome_Prof, cursoId, data, salaId, andarId, blocoId, turnoId, statusId) VALUES (${mysql.escape(nome_Prof)}, ${mysql.escape(cursoId)}, ${mysql.escape(data)}, ${mysql.escape(salaId)}, ${mysql.escape(andarId)}, ${mysql.escape(blocoId)}, ${mysql.escape(turnoId)}, ${mysql.escape(statusId)})`, (error, result) => {
            
                if (result) {
                response.status(201);
                console.log(result.insertId),
                response.json({
                    id: result.insertId,
                    nome_Prof,
                    cursoId, 
                    data, 
                    salaId, 
                    andarId, 
                    blocoId, 
                    turnoId,
                    statusId
                });
            } else if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível adicionar o agendamento'));
            }
        });
    },

    read(request, response) {
        const { limit, offset } = request.pagination;
        db.getConnection().query('SELECT * FROM agendamento', [limit, offset], (error, result) => {
            if (result) response.json(result);
            else if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível buscar agendamentos'));
            };
        });
    },

    update(request, response) {
        const { id } = request.params;
        const { nome } = request.body;

        db.getConnection().query(`UPDATE agendamento SET nome = ${mysql.escape(nome)} WHERE id = ${mysql.escape(id)}`, (error, result) => {
            if (result) {
                if (result.affectedRows > 0) {
                    response.json({ status: '200', message: 'Contado atualizado com sucesso' });
                } else {
                    response.status(404);
                    response.json(JsonError(request, response, 'Contado não encontrado'));
                }
            } else if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível atualizar o agendamento'));
            };
        });
    },

    delete(request, response) {
        const { id } = request.params;

        db.getConnection().query(`DELETE FROM agendamento WHERE id = ${mysql.escape(id)}`, (error, result) => {
            if (result) {
                if (result.affectedRows > 0) {
                    response.json({ status: '200', message: 'Contado deletado com sucesso' });
                } else {
                    response.status(404);
                    response.json(JsonError(request, response, 'Contado não encontrado'));
                }
            } else if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível deletar o agendamento'));
            };
        });
    }
};