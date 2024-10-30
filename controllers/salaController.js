const mysql = require('mysql');
const db = require('../models');

const JsonError = require('../errors/JsonError');

module.exports = {
    create(request, response) {
        const { sala } = request.body;

        db.getConnection().query(`INSERT INTO sala (codogo) VALUES (${mysql.escape(codogo)})`, (error, result) => {
            if (result) {
                response.status(201);
                response.json({
                    "id": result.insertId,
                    sala,
                });
            } else if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível adicionar o sala'));
            }
        });
    },

    read(request, response) {
        const { limit, offset } = request.pagination;
        db.getConnection().query('SELECT * FROM sala', [limit, offset], (error, result) => {
            if (result) response.json(result);
            else if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível buscar salas'));
            };
        });
    },

    update(request, response) {
        const { id } = request.params;
        const { sala } = request.body;

        db.getConnection().query(`UPDATE sala SET sala = ${mysql.escape(sala)} WHERE id = ${mysql.escape(id)}`, (error, result) => {
            if (result) {
                if (result.affectedRows > 0) {
                    response.json({ status: '200', message: 'Contado atualizado com sucesso' });
                } else {
                    response.status(404);
                    response.json(JsonError(request, response, 'Contado não encontrado'));
                }
            } else if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível atualizar o sala'));
            };
        });
    },

    delete(request, response) {
        const { id } = request.params;

        db.getConnection().query(`DELETE FROM sala WHERE id = ${mysql.escape(id)}`, (error, result) => {
            if (result) {
                if (result.affectedRows > 0) {
                    response.json({ status: '200', message: 'Contado deletado com sucesso' });
                } else {
                    response.status(404);
                    response.json(JsonError(request, response, 'Contado não encontrado'));
                }
            } else if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível deletar o sala'));
            };
        });
    }
};