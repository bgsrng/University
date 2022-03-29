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
  MYSQL_USER: '',
  MYSQL_PASSWORD: '',
  MYSQL_DBNAME: '',
  MYSQL_PORT: 0,
};
const matkuliah = {
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
const fakultas = {
  MYSQL_USER: '',
  MYSQL_PASSWORD: '',
  MYSQL_DBNAME: '',
  MYSQL_PORT: 0,
};

const dosenDBQuery = util.promisify(dosendb.query).bind(dosenDB);

const mahsiswaDBQuery = util.promisify(mahasiswadb.query).bind(mahasiswaDB);

module.exports = { dosenDBQuery, mahsiswaDBQuery };
