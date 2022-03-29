const dotenv = require("dotenv")

const dbConfigs = {
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DBNAME: process.env.MYSQL_DBNAME,
  MYSQL_PORT: process.env.MYSQL_PORT,
};

module.exports = { dbConfigs };
