const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router
	.post('/login', (req, res, next) => {
		authController.login(req, res).then(next).catch(next);
	})
	.post('/register', (req, res, next) => {
		authController.register(req, res).then(next).catch(next);
	});

module.exports = router;
