const router = require('express').Router();
const { fakultasControllers } = require('../controllers');

router.get('/fakultas', fakultasControllers.getAllFakultas);
router.get('/fakultas/:id', fakultasControllers.getFakultasById);
router.post('/fakultas', fakultasControllers.createNewFakultas);
router.patch('/fakultas/:id', fakultasControllers.editFakultasById);
router.delete('/fakultas/:id', fakultasControllers.deleteFakultasById);

module.exports = router;
