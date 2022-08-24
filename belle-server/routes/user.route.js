const router = require('express').Router();
const userController = require('../controllers/user.controller');

router
    .get('/', [], (req, res, next) => {
        userController.getAllUsers(req, res).then(next).catch(next);
    })
    .get('/:userId', [], (req, res, next) => {
        userController.getUser(req, res).then(next).catch(next);
    })
    .put('/:userId', [], (req, res, next) => {
        userController.updateUser(req, res).then(next).catch(next);
    });

module.exports = router;
