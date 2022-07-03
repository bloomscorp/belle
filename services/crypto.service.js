const { hashSync, compareSync } = require('bcrypt');

class CryptoService {

	constructor() { }

	async encrypt(password) {
		return hashSync(password, 10);
	}

	async decrypt(passwordHash, password) {
		return compareSync(password, passwordHash);
	};
}

module.exports = new CryptoService();