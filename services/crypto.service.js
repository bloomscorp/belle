const { hashSync, compareSync } = require('bcrypt');

module.exports = class CryptoService {

	constructor() { }

	async encrypt(password) {
		return hashSync(password, 10);
	}

	async decrypt(passwordHash, password) {
		return compareSync(password, passwordHash);
	};
}