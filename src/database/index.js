const mysql = require('mysql');
const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_DBNAME, MYSQL_PORT } = require('../configs/db');
const util = require('util');

const universityDB = mysql.createPool({
  MYSQL_USER: MYSQL_USER,
  MYSQL_PASSWORD: MYSQL_PASSWORD,
  MYSQL_DBNAME: MYSQL_DBNAME,
  MYSQL_PORT: MYSQL_PORT,
});

const universityDBQuery = util.promisify(universityDB.query).bind(universityDB);

module.exports = { universityDBQuery };
