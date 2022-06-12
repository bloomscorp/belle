const { hashSync, compare } = require('bcrypt');

const encryptPassword = async password => {
	return hashSync(password, 10);
};

const decryptPassword = async (passwordHash, password) => {
	return compare(password, passwordHash);
};

module.exports = {
	encryptPassword,
	decryptPassword,
};
