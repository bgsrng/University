const router = require('express').Router();
const { kampusControllers } = require('../controllers');

router.get('/kampus', kampusControllers.getAllKampus);
router.get('/kampus/:id', kampusControllers.getKampusById);
router.patch('/kampus/:id', kampusControllers.editKampusById);
router.delete('/kampus/:id', kampusControllers.deleteKampusById);
router.post('/kampus', kampusControllers.createNewKampus);

module.exports = router;
