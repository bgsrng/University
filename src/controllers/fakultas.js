const { universityDBQuery } = require('../database');

const fakultasControllers = {
  getAllFakultas: async (req, res) => {
    try {
      let sqlQuery = `SELECT * FROM fakultas`;

      const dbResult = await universityDBQuery(sqlQuery);

      res.status(200).json({
        message: 'all fakultas data',
        result: dbResult,
      });
    } catch (error) {
      console.log(err);
      res.status(500).json({
        message: 'server error',
      });
    }
  },
  createNewFakultas: async (req, res) => {
    try {
      let replacmentQuery = `INSERT INTO fakultas VALUES (0,?,?,?)`;

      let replacement = [];

      const dbResult = await universityDBQuery(replacmentQuery, replacement);

      res.status(200).json({
        message: 'all fakultas data',
        result: dbResult,
      });
    } catch (error) {
      console.log(err);
      res.status(500).json({
        message: 'server error',
      });
    }
  },
  getFakultasById: async (req, res) => {
    const fakultasId = req.params.id;
    try {
      let sqlQuery = `SELECT * FROM fakultas WHERE id = ${fakultasId}`;

      const dbResult = await universityDBQuery(sqlQuery);

      res.status(200).json({
        message: 'get fakultas Id',
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'server error',
      });
    }
  },
};

module.exports = fakultasControllers;
