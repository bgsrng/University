const router = require('express').Router();
const { fakultasControllers } = require('../controllers');

router.get('/', fakultasControllers.getAllFakultas);
router.get('/:id');
router.post('/', fakultasControllers.createNewFakultas);
router.patch('/');
router.delete('/');
module.exports = router;
