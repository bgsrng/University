const universityDBQuery = require('../database');

const fakultasControllers = {
  getAllFakultas: async (req, res) => {
    try {
      let sqlQuery = `SELECT * FROM fakultas;`;

      const dbResult = await universityDBQuery(sqlQuery);

      res.status(200).json({
        message: 'get all fakultas data',
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'server error',
      });
    }
  },
  createNewFakultas: async (req, res) => {
    let inputValues = req.body;
    console.log(inputValues);
    try {
      let replacmentQuery = `INSERT INTO fakultas VALUES (0,?,?)`;

      const dbResult = await universityDBQuery(replacmentQuery, inputValues);

      res.status(200).json({
        message: 'create data success',
      });
    } catch (err) {
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
  editFakultasById: async (req, res) => {
    const fakultasId = req.params.id;
    const { fakultas_name, dekan } = req.body;

    let editQuery = '';

    if (fakultas_name) {
      editQuery += `fakultas_name = "${fakultas_name}",`;
    }
    if (dekan) {
      editQuery += `dekan = ${dekan}, `;
    }

    editQuery = editQuery.slice(0, -1);

    let sqlQuery = `UPDATE fakultas SET ${editQuery} WHERE id = ${fakultasId}`;

    try {
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
  deleteFakultasById: async (req, res) => {
    const fakultasId = req.params.id;
    try {
      let sqlQuery = `DELETE FROM fakultas WHERE id = ${fakultasId}`;

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
