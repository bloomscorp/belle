const { StatusCodes } = require("http-status-codes");

class APIResponse {

	constructor(code, message, data) {
		this.code = code;
		this.message = message;
		this.data = data;
	}

	static created(message, data = null) {
		return new APIResponse(StatusCodes.CREATED, message, data);
	}

	static ok(message, data = null) {
		return new APIResponse(StatusCodes.OK, message, data);
	}

	static conflict(message, data = null) {
		return new APIResponse(StatusCodes.CONFLICT, message, data);
	}

	static notFound(message, data = null) {
		return new APIResponse(StatusCodes.NOT_FOUND, message, data);
	}
}

module.exports = APIResponse;