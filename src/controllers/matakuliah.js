const { universityDBQuery } = require("../database");

const matakuliahControllers = {
  getAllMatakuliah: async (req, res) => {
    try {
      let sqlQuery = `SELECT * FROM matakuliah`;

      const dbResult = await universityDBQuery(sqlQuery);

      res.status(200).json({
        message: "all matakuliah data",
        result: dbResult,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Server error",
      });
    }
  },
  getMatakuliahById: async (req, res) => {
    const matakuliahId = req.params.id;
    try {
      let sqlQuery = `SELECT * FROM matakuliah WHERE id = ${matakuliahId}`;

      const dbResult = await universityDBQuery(sqlQuery);

      res.status(200).json({
        message: "matakuliah found",
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server error",
      });
    }
  },
  createNewMatakuliah: async (req, res) => {
    const newData = req.body;
    try {
      let replacmentQuery = `INSERT INTO matakuliah VALUES (0, ?)`;

      const dbResult = await universityDBQuery(replacmentQuery, newData);

      res.status(201).json({
        message: "matakuliah created",
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server error",
      });
    }
  },
  editMatakuliahById: async (req, res) => {
    const matakuliahId = req.params.id;
    const { matakuliah_name } = req.body;

    let editQuery = "";
    try {
      if (matakuliah_name) {
        editQuery += `matakuliah_name = "${matakuliah_name}"`;
      }

      console.log(editQuery);

      let sqlQuery = `UPDATE matakuliah SET ${editQuery} WHERE id = ${matakuliahId}`;

      const dbResult = await universityDBQuery(sqlQuery);

      res.status(200).json({
        message: "matakuliah updated",
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server error",
      });
    }
  },
  deleteMatakuliahById: async (req, res) => {
    const matakuliahId = req.params.id;
    try {
      let sqlQuery = `DELETE FROM matakuliah WHERE id = ${matakuliahId}`;

      const dbResult = await universityDBQuery(sqlQuery);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server error",
      });
    }
  },
};

module.exports = matakuliahControllers;
