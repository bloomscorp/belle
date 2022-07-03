
const { StatusCodes } = require('http-status-codes');
const APIError = require('../services/api-error.service');
const APIResponse = require('../services/response.service');

module.exports = (response, req, res, next) => {

	if (response) {
		if (
			response instanceof APIError ||
			response instanceof APIResponse
		) {
			res.status(response.code).json({
				message: response.message,
				...(response.data && { data: response.data })
			})
		} else {
			res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
				message: 'Something went wrong!'
			})
		}
	} else {
		next();
	}
};
