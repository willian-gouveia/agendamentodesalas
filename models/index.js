const mysql = require('mysql');
const dbConfig = require('../config/db.config');

let con;
module.exports = {
    connect() {
        con = mysql.createConnection(dbConfig);
        con.connect((error) => {
            if (error) {
                console.log(`Não foi possível estabelecer a conexão com '${dbConfig.host}:${dbConfig.port}/${dbConfig.database}'`);
            } else {
                console.log(`Conexão com '${dbConfig.host}:${dbConfig.port}/${dbConfig.database}' estabelecida`);
            }
        });
    },

    getConnection() {
        return con;
    }
}