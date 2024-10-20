const mysql = require('mysql');
const db = require('../models');

const JsonError = require('../errors/JsonError');

module.exports = {
    create(request, response) {
        const { nome } = request.body;

        db.getConnection().query(`INSERT INTO curso (nome) VALUES (${mysql.escape(nome)})`, (error, result) => {
            if (result) {
                response.status(201);
                response.json({
                    "id": result.insertId,
                    nome,
                });
            } else if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível adicionar o curso'));
            }
        });
    },

    read(request, response) {
        db.getConnection().query('SELECT * FROM curso', (error, result) => {
            if (result) response.json(result);
            else if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível buscar cursos'));
            };
        });
    },

    update(request, response) {
        const { id } = request.params;
        const { nome } = request.body;

        db.getConnection().query(`UPDATE curso SET nome = ${mysql.escape(nome)} WHERE id = ${mysql.escape(id)}`, (error, result) => {
            if (result) {
                if (result.affectedRows > 0) {
                    response.json({ status: '200', message: 'Contado atualizado com sucesso' });
                } else {
                    response.status(404);
                    response.json(JsonError(request, response, 'Contado não encontrado'));
                }
            } else if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível atualizar o curso'));
            };
        });
    },

    delete(request, response) {
        const { id } = request.params;

        db.getConnection().query(`DELETE FROM curso WHERE id = ${mysql.escape(id)}`, (error, result) => {
            if (result) {
                if (result.affectedRows > 0) {
                    response.json({ status: '200', message: 'Contado deletado com sucesso' });
                } else {
                    response.status(404);
                    response.json(JsonError(request, response, 'Contado não encontrado'));
                }
            } else if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível deletar o curso'));
            };
        });
    }
};