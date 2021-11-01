const router = require('express').Router();

const userController = require('../controllers/user.controller');

router.get('/', userController.getUser);

router.post('/', userController.createUser);

router.delete('/', userController.deleteUser);

module.exports = router;