const router = require('express').Router();
const { fakultasControllers } = require('../controllers');

router.get('/', fakultasControllers.getAllFakultas);
router.get('/:id', fakultasControllers.getFakultasById);
router.post('/', fakultasControllers.createNewFakultas);
router.patch('/:id', fakultasControllers.editFakultasById);
router.delete('/:id', fakultasControllers.deleteFakultasById);

module.exports = router;
