const universityDBQuery = require('../database')

const dosenControllers = {
    getAllDosen: async (req, res) => {
        try {
          let sqlQuery = `SELECT * FROM dosen`;
    
          const dbResult = await universityDBQuery(sqlQuery);
    
          res.status(200).json({
            message: 'all dosen data',
            result: dbResult,
          });
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: 'Server error',
          });
        }
      },
      getDosenById: async (req, res) => {
        const dosenId = req.params.id;
        try {
          let sqlQuery = `SELECT * FROM dosen WHERE id = ${dosenId}`;
    
          const dbResult = await universityDBQuery(sqlQuery);
    
          res.status(200).json({
            message: 'dosen found',
            result: dbResult,
          });
        } catch (err) {
          console.log(err);
          res.status(500).json({
            message: 'Server error',
          });
        }
      },
      createNewDosen: async (req, res) => {
        const newData = req.body;
        try {
          let replacmentQuery = `INSERT INTO dosen VALUES (0, ?, ?, ?)`;
    
          const dbResult = await universityDBQuery(replacmentQuery, newData);
    
          res.status(201).json({
            message: 'dosen added',
            result: dbResult,
          });
        } catch (err) {
          console.log(err);
          res.status(500).json({
            message: 'Server error',
          });
        }
      },
      editDosenById: async (req, res) => {
        const dosenId = req.params.id;
        const { dosen_name, fakultas_id, jabatan } = req.body;
    
        let editQuery = '';
        try {
          if (dosen_name) {
            editQuery += `dosen_name = '${dosen_name}'`;
          }

          if (fakultas_id) {
              editQuery += `fakultas_id = '${fakultas_id}'`
          }

          if (jabatan) {
              editQuery += `jabatan = '${jabatan}'`
          }
    
          console.log(editQuery);
    
          let sqlQuery = `UPDATE dosen SET ${editQuery} WHERE id = ${dosenId}`;
    
          const dbResult = await universityDBQuery(sqlQuery);
    
          res.status(200).json({
            message: 'dosen updated',
            result: dbResult,
          });
        } catch (err) {
          console.log(err);
          res.status(500).json({
            message: 'Server error',
          });
        }
      },
      deleteDosenById: async (req, res) => {
        const dosenId = req.params.id;
        try {
          let sqlQuery = `DELETE FROM dosen WHERE id = ${dosenId}`;
    
          const dbResult = await universityDBQuery(sqlQuery);

          res.status(200).json({
              message: 'Server error',
              result: dbResult
          }) 
        } catch (err) {
          console.log(err);
          res.status(500).json({
            message: 'Server error',
          });
        }
      },
};

module.exports = dosenControllers;
