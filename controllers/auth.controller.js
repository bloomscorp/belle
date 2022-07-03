const { StatusCodes } = require('http-status-codes');
const userModel = require('../models/user.model');
const APIError = require('../services/error.service');
const cryptoService = require('../services/crypto.service');
const APIResponse = require('../services/response.service');
const jwtService = new require('../services/jwt.service');


const register = async (req, res) => {

	const { emailId, password } = req.body;

	if (!emailId || !password) {
		return APIError.badRequest('emailId or password is missing!');
	}

	const user = await userModel.findOne({ emailId });

	if (user) {
		return APIResponse.conflict('emailId already exists!')
	}

	const encryptedPassword = await cryptoService.encrypt(password);

	await userModel.create({ emailId, password: encryptedPassword });

	return APIResponse.created('user registered successfully!');
};

const login = async (req, res) => {

	const { emailId, password } = req.body;

	if (!emailId || !password) {
		return APIError.badRequest('emailId or password is missing!')
	}

	const user = await userModel.findOne({ emailId });

	if (!user) {
		return APIResponse.notFound('emailId not found!');
	}

	const isPasswordValid = await cryptoService.decrypt(user.password, password);

	if (isPasswordValid) {
		return APIResponse.ok(
			'Logged in successfully!',
			{
				accessToken: jwtService.getAccessToken({
					userId: user.userId, emailId: user.emailId
				})
			});
	}

	return APIError.unauthorized('password is incorrect!');
}

module.exports = {
	register,
	login
};
