const { StatusCodes } = require('http-status-codes');
const userModel = require('../models/user.model');
const CryptoService = require('../services/crypto.service');
const { createUser } = require('../services/user.service');
const JWTService = new require('../services/jwt.service');

const jwtService = new JWTService();
const cryptoService = new CryptoService();

const register = async (req, res) => {

	try {

		const { emailId, password } = req.body;

		if (!emailId || !password) {
			return res.status(StatusCodes.BAD_GATEWAY).json({
				success: false,
				message: 'emailId or password is missing!',
			})
		}

		const user = await userModel.findOne({ emailId });

		if (user) {
			return res.status(StatusCodes.CONFLICT).json({
				success: true,
				message: 'emailId already exists!'
			})
		}

		const encryptedPassword = await cryptoService.encrypt(password);

		await createUser(emailId, encryptedPassword);

		return res.status(StatusCodes.BAD_GATEWAY).json({
			success: false,
			message: 'User registered successfully!',
		})
	} catch (error) {
		console.log(error);
	}

};

const login = async (req, res) => {

	try {
		const { emailId, password } = req.body;

		if (!emailId || !password) {
			return res.status(StatusCodes.BAD_REQUEST).json({
				success: false,
				message: 'emailId or password is missing!'
			})
		}

		const user = await userModel.findOne({ emailId });

		if (!user) {
			return res.status(StatusCodes.NOT_FOUND).json({
				success: true,
				message: 'emailId not found!'
			})
		}

		const isPasswordValid = await cryptoService.decrypt(user.password, password);

		if (isPasswordValid) {
			return res.status(StatusCodes.OK).json({
				success: true,
				data: {
					accessToken: jwtService.getAccessToken({
						userId: user.userId, emailId: user.emailId
					})
				}
			})
		}

		return res.status(StatusCodes.UNAUTHORIZED).json({
			success: true,
			message: 'Incorrect password!'
		});

	} catch (error) {
		console.log(error)
	}
}

module.exports = {
	register,
	login
};
