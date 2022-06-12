const { StatusCodes } = require('http-status-codes');
const { encryptPassword, decryptPassword } = require('../services/crypto.service');
const { createUser } = require('../services/user.service'); 

const register = async payload => {

	if (!payload.emailId || !payload.password) {
		return {
            status: StatusCodes.BAD_REQUEST,
            success: false,
			message: 'emailId or password is missing!',
		};
    }
    
	const encryptedPassword = await encryptPassword(payload.password);

	await createUser(payload.emailId, encryptedPassword);

	return {
		status: StatusCodes.CREATED,
		success: true,
		message: 'User registered successfully!'
	}
};

module.exports = {
	register,
};
