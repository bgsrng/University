const universityDBQuery = require('../database');

const kampusControllers = {
  getAllKampus: async (req, res) => {
    try {
      let sqlQuery = `SELECT * FROM kampus`;

      const dbResult = await universityDBQuery(sqlQuery);

      res.status(200).json({
        message: 'get all kampus data',
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getKampusById: async (req, res) => {
    const kampusId = req.params.id;
    try {
      let sqlQuery = `SELECT * FROM kampus WHERE id = ${kampusId} `;

      const dbResult = await universityDBQuery(sqlQuery);

      res.status(200).json({
        message: 'get all kampus data',
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createNewKampus: async (req, res) => {
    const newData = req.body;
    try {
      let replacmentQuery = `INSERT INTO kampus VALUES (0,?,?)`;

      const dbResult = await universityDBQuery(replacmentQuery, newData);

      res.status(200).json({
        message: 'get all kampus data',
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
    }
  },
  deleteKampusById: async (req, res) => {
    const kampusId = req.params.id;
    try {
      let sqlQuery = `DELETE FROM kampus WHERE id = ${kampusId}`;

      const dbResult = await universityDBQuery(sqlQuery);

      res.status(200).json({
        message: 'get all kampus data',
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
    }
  },
  editKampusById: async (req, res) => {
    const kampusId = req.params.id;
    const { kampus_name, location } = req.body;

    let editQuery = '';
    try {
      if (kampus_name) {
        editQuery += `kampus_name = "${kampus_name}", `;
      }

      if (location) {
        editQuery += `location = "${location}" `;
      }

      console.log(editQuery);

      let sqlQuery = `UPDATE kampus SET ${editQuery} WHERE id = ${kampusId}`;

      const dbResult = await universityDBQuery(sqlQuery);

      res.status(200).json({
        message: 'get all kampus data',
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = kampusControllers;
