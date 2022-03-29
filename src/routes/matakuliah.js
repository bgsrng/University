const router = require('express').Router();
const { matakuliahControllers } = require('../controllers');

router.get('/', matakuliahControllers.getAllMataKuliah)

module.exports = router;
