const mysql = require('mysql');
const { mahasiswaDBConfig, matkuliahDBConfig, fakultasDBConfig, clubDBConfig, dosenDBConfig } = require('../configs/db');
const util = require('util');

const mahasiswaDB = {
  MYSQL_USER: mahasiswaDBConfig.MYSQL_USER,
  MYSQL_PASSWORD: mahasiswaDBConfig.MYSQL_PASSWORD,
  MYSQL_DBNAME: mahasiswaDBConfig.MYSQL_DBNAME,
  MYSQL_PORT: mahasiswaDBConfig.MYSQL_PORT,
};
const dosenDB = {
  MYSQL_USER: dosenDBConfig.MYSQL_USER,
  MYSQL_PASSWORD: '',
  MYSQL_DBNAME: '',
  MYSQL_PORT: 0,
};
const matakuliahDB = {
  MYSQL_USER: '',
  MYSQL_PASSWORD: '',
  MYSQL_DBNAME: '',
  MYSQL_PORT: 0,
};
const clubDB = {
  MYSQL_USER: '',
  MYSQL_PASSWORD: '',
  MYSQL_DBNAME: '',
  MYSQL_PORT: 0,
};
const fakultasDB = {
  MYSQL_USER: '',
  MYSQL_PASSWORD: '',
  MYSQL_DBNAME: '',
  MYSQL_PORT: 0,
};

const dosenDBQuery = util.promisify(dosenDB.query).bind(dosenDB);

const mahasiswaDBQuery = util.promisify(mahasiswaDB.query).bind(mahasiswaDB);
const matakuliahDBQuery = util.promisify(mahtakuliahDB.query).bind(mahtakuliahDB);
const fakultasDBQuery = util.promisify(fakultasDB.query).bind(fakultasDB);
const clubDBQuery = util.promisify(clubDB.query).bind(fakultasDB);

module.exports = { dosenDBQuery, mahasiswaDBQuery, matakuliahDBQuery, fakultasDBQuery, clubDBQuery };
