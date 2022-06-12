const { response } = require('express');
const { StatusCodes } = require('http-status-codes');

const sendSuccessResponse = (response, res) => {
	res.status(response.status).send({
		success: response.success,
		message: response.message,
		data: response.data,
	});
};

const sendErrorResponse = (error, res) => {
	if (error.message) {
		res.status(error.status).send({
			success: error.success,
			message: error.message,
		});
	} else {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
			success: false,
			message: error.toString(),
		});
	}
};

module.exports = (response, req, res, next) => {
	if (response) {
		if (response.status) {
			if (response.data) {
				sendSuccessResponse(response, res);
			} else {
				sendErrorResponse(response, res);
			}
		} else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
                success: false,
                message: response.toString()
            });
			next();
		}
	} else {
		next();
	}
};
