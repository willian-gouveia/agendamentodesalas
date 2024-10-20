
const mysql = require('mysql');
const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const JsonError = require('../errors/JsonError');

module.exports = {
    create(request, response) {
        const { cpf, nome, email } = request.body;
            db.getConnection().query(`SELECT * FROM usuario WHERE cpf = ${mysql.escape(cpf)}`, (error, result) => {
                bcrypt.hash(request.body.senha, 12, (errBcrypt, senhaHash) => {
                if (errBcrypt) { return response.status(500).send({ error: errBcrypt })}
                console.log(result.length)
                if (result.length > 0) {
                    response.status(409);
                    response.json(JsonError(request, response, 'Já existe um usuario cadastrado com esses dados'));
                }else {
                    db.getConnection().query(`INSERT INTO usuario (cpf, nome, email, senhaHash) VALUES (${mysql.escape(cpf)}, ${mysql.escape(nome)}, ${mysql.escape(email)}, ${mysql.escape(senhaHash)})`, (error, result) => {
                        if (result) {
                            response.status(201);
                            response.json({
                                //"id": result.insertId,
                                cpf,
                                nome,
                                email,
                                senhaHash
                            });
                        } else if (error) {
                            response.status(500);
                            response.json(JsonError(request, response, 'Não foi possível adicionar o usuario'));
                        }
                    });
                }
            })
        })  
    },

    login(request, response) {
        const { email, senha } = request.body;
        try {
            db.getConnection().query(`SELECT * FROM usuario WHERE email = ${mysql.escape(email)}`, async (error, result) => {
            
            if (result.length === 0) {
                response.status(401);
                return response.json(JsonError(request, response, 'As informações do usuário estão incorretas!'));
            }
            
            if (result.length > 0) {
                const nome = result[0].nome
                bcrypt.compare(senha, result[0].senhaHash, (error, result) => {
                    if (error) {
                        console.error(error);
                    } else {
                        if (result) {
                            const token = jwt.sign({ email: email, date: new Date() }, 
                            process.env.JWT_KEY, { expiresIn: '1h' })
                            return response.status(200).send({
                                message: `Login realizado com sucesso, bem-vindo ${nome}`,
                                token: token
                            });

                        } else {
                            response.status(401);
                            return response.json(JsonError(request, response, 'As informações do usuário estão incorretas!'));
                        }
                    }
                });
            }
            })
            } catch (error) {
            console.error('Erro ao verificar a senha:', error);
            return false;
            } finally {
            db.getConnection().end();
        }  
    },

    read(request, response) {
        db.getConnection().query('SELECT * FROM usuario', (error, result) => {
            if (result) response.json(result);
            else if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível buscar usuarios'));
            };
        });
    },

    update(request, response) {
        const { id } = request.params;
        const { nome } = request.body;

        db.getConnection().query(`UPDATE usuario SET nome = ${mysql.escape(nome)} WHERE id = ${mysql.escape(id)}`, (error, result) => {
            if (result) {
                if (result.affectedRows > 0) {
                    response.json({ status: '200', message: 'Usuario atualizado com sucesso' });
                } else {
                    response.status(404);
                    response.json(JsonError(request, response, 'Usuario não encontrado'));
                }
            } else if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível atualizar o usuario'));
            };
        });
    },

    delete(request, response) {
        const { id } = request.params;

        db.getConnection().query(`DELETE FROM usuario WHERE id = ${mysql.escape(id)}`, (error, result) => {
            if (result) {
                if (result.affectedRows > 0) {
                    response.json({ status: '200', message: 'Usuario deletado com sucesso' });
                } else {
                    response.status(404);
                    response.json(JsonError(request, response, 'Usuario não encontrado'));
                }
            } else if (error) {
                response.status(500);
                response.json(JsonError(request, response, 'Não foi possível deletar o usuario'));
            };
        });
    }
};