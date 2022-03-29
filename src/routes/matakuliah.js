const router = require('express').Router();
const { matakuliahControllers } = require('../controllers');

router.get('/matakuliah', matakuliahControllers.getAllMatakuliah)
router.get('/matakuliah/:id', matakuliahControllers.getMatakuliahById)
router.post('/matakuliah/:id',matakuliahControllers.createNewMatakuliah)
router.patch('/matakuliah', matakuliahControllers.editMatakuliahById)
router.delete('/matakuliah/:id', matakuliahControllers.deleteMatakuliahById)

module.exports = router;
