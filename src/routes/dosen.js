const router = require('express').Router();
const { dosenControllers } = require('../controllers');

router.get('/dosen', dosenControllers.getAllDosen)
router.get('/dosen/:id', dosenControllers.getDosenById)
router.post('/dosen/:id',dosenControllers.createNewDosen)
router.patch('/dosen', dosenControllers.editDosenById)
router.delete('/dosen/:id', dosenControllers.deleteDosenById)


module.exports = router;
