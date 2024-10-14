const config = {
  dbHost: process.env.MYSQL_HOST,
  dbName: process.env.MYSQL_DATABASE,
  dbPort: process.env.MYSQL_PORT,
  dbUser: process.env.MYSQL_USERNAME,
  dbPassword: process.env.MYSQL_PASSWORD,
}

module.exports = { config };

