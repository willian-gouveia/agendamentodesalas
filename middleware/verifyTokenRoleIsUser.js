require('dotenv').config() // Para usar a JWT_KEY
const mysql = require('mysql');
const db = require('../models');
const jwt = require('jsonwebtoken');

//const JsonError = require('../errors/JsonError');

function verifyTokenRoleIsUser(request,  response, next) {
  const { email } = request.body;
  db.getConnection().query(`SELECT * FROM usuario WHERE email = ${mysql.escape(email)}`, async (error, result) => {
  try {
    let token = request.headers.authorization.split(' ')[1];
    console.log(">>>>>Token: " + token);
    if (!token) {
      return response.status(401).json({message:"Token inválido"});
    }
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    let usuario = Object.values(decoded)

      if (result[0].email === usuario[0].email) {
        if (usuario[0].roles === 'admin' || 'usuario') {
              next();
          }
      } else {
         return response.status(401).send({
          message: `Acesso negado. Somente Admin tem permissão para esta operação ou há algum problema em sua chave\token`
         });
      }
  
  } catch (error) {
        response.status(401).json({
          message: `Acesso negado. Somente Admin tem permissão para esta operação ou há algum problema em sua chave\token`
        //response.json(JsonError(request, response, error.message));
      })
    }
  })
}

module.exports = verifyTokenRoleIsUser;

