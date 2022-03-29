const { universityDBQuery } = require('../database');

const matakuliahControllers = {
    getAllMataKuliah: async (req, res) => {
        try {
            let sqlQuery = `SELECT * FROM matakuliah`

            const dbResult = await universityDBQuery(sqlQuery)

            res.status(200).json({
                message: 'all matakuliah data',
                result: dbResult,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'Server error'
            })
        }
    }
};

module.exports = matakuliahControllers;
