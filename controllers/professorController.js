
const mysql = require('mysql2');
const db = require('../models');

const JsonError = require('../errors/JsonError');

module.exports = {
    create(request, response) {
        const { nome } = request.body;

        db.getConnection().query(`INSERT INTO professor (nome) VALUES (${mysql.escape(nome)})`, (error, result) => {
            if (result) {
                response.status(201);
                response.json({
                    "id": result.insertId,
                    nome
                });
            } else if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível adicionar o professor'));
            }
        });
    },

    read(request, response) {
        db.getConnection().query('SELECT * FROM professor', (error, result) => {
            if (result) response.json(result);
            else if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível buscar professores'));
            };
        });
    },

    readOne(request, response) {
        const { id } = request.params;

        db.getConnection().query(`SELECT * FROM professor WHERE id = ${mysql.escape(id)}`, (error, result) => {
            if (result) {
                    response.json(result);
                } else {
                    response.status(404);
                    response.json(JsonError(request, response, 'Não foi possível buscar o professor'));
                }
            
            if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível buscar o professor'));
            };
        });
    },

    update(request, response) {
        const { id } = request.params;
        const { nome } = request.body;

        db.getConnection().query(`UPDATE professor SET nome = ${mysql.escape(nome)} WHERE id = ${mysql.escape(id)}`, (error, result) => {
            if (result) {
                if (result.affectedRows > 0) {
                    response.json({ status: '200', message: 'professor atualizado com sucesso' });
                } else {
                    response.status(404);
                    response.json(JsonError(request, response, 'professor não encontrado'));
                }
            } else if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível atualizar o professor'));
            };
        });
    },

    delete(request, response) {
        const { id } = request.params;

        db.getConnection().query(`DELETE FROM professor WHERE id = ${mysql.escape(id)}`, (error, result) => {
            if (result) {
                if (result.affectedRows > 0) {
                    response.json({ status: '200', message: 'professor deletado com sucesso' });
                } else {
                    response.status(404);
                    response.json(JsonError(request, response, 'professor não encontrado'));
                }
            } else if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível deletar o professor'));
            };
        });
    }
};
