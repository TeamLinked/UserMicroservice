  module.exports = {
  dbConfig: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.MYSQL_PORT,
    dialect: 'mysql',
    logging: true,
  }
};