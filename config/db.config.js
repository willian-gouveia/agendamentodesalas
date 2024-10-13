const mysql = require('mysql2');

const db =  module.exports = {
    host: 'localhost',
    port: 3306,
    database: 'gerenciamentodesalas',
    user: 'root',
    password: '',
}

let con;
module.exports = {
    connect() {
        con = mysql.createConnection(db);
        con.connect((error) => {
            if (error) {
                console.log(`Não foi possível estabelecer a conexão com '${db.host}:${db.port}/${db.database}'`);
            } else {
                console.log(`Conexão com '${db.host}:${db.port}/${db.database}' estabelecida`);
            }
        });
    },

    getConnection() {
        return con;
    }
}
