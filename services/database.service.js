const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL || "";

const initDatabase = async () => {
	return mongoose.connect(DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
}

module.exports = initDatabase;