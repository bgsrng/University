const mysql = require('mysql');
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DBNAME, MYSQL_PORT } = require('../configs/db');
const util = require('util');

const universityDB = mysql.createPool({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DBNAME,
  port: MYSQL_PORT,
  multipleStatements: false,
});

const universityDBQuery = util.promisify(universityDB.query).bind(universityDB);

module.exports = universityDBQuery;
