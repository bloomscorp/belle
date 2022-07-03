const { StatusCodes } = require("http-status-codes");

class APIError {

	constructor(code, message, data = null) {
		this.code = code;
		this.message = message;
		this.data = data;
	}

	static badRequest(message) {
		return new APIError(StatusCodes.BAD_REQUEST, message);
	}

	static unauthorized(message) {
		return new APIError(StatusCodes.UNAUTHORIZED, message);
	}

	static notFound(message) {
		return new APIError(StatusCodes.NOT_FOUND, message);
	}
}

module.exports = APIError;