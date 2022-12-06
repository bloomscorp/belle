import {Router} from "express";
import {RequestMapper} from "../../request-mapper.js";


// const router = require('express').Router();
// const authController = require('../controllers/auth.controller');

const router = Router();



router
	.post(
		RequestMapper.LOGIN,
		(req, res, next) => {
			res.status(200).json({
				msg: 'Hello, World!'
			});
		// authController.login(req, res).then(next).catch(next);
		}
	)
	.post(
		RequestMapper.REGISTER,
		(req, res, next) => {
		// authController.register(req, res).then(next).catch(next);
		}
	);

export default router;
