const UserModel = require('../models/user.model');

const createUser = async (emailId, password) => {
	const doc = new UserModel({
		emailId,
		password,
	});
	return await doc.save();
};

module.exports = {
	createUser,
};
