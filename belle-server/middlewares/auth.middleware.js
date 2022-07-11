const { StatusCodes } = require('http-status-codes');
const jwtService = require('../services/jwt.service');
const { JsonWebTokenError, TokenExpiredError } = require('jsonwebtoken');

class AuthHandler {

	constructor() {}

	authorise(req, res, next) {
        try {
            
			let authHeader = req.headers['authorization'];
			let token = authHeader && authHeader.split(' ')[1];

			if (!token) {
				return res.status(StatusCodes.UNAUTHORIZED).json({
					success: false,
					message: 'token not found!',
				});
			}

			let data = jwtService.verifyAccessToken(token);

			req['user'] = data;
            next();
            
        } catch (err) {
            let message = '';

            if (err instanceof JsonWebTokenError) {
                message = 'Invalid jwt token!'
            }

            if (err instanceof TokenExpiredError) {
                message = 'token is expired!'
            }

			res.status(StatusCodes.UNAUTHORIZED).json({
				success: false,
				message,
			});
		}
	}
}

module.exports = new AuthHandler();
