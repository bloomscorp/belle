require('dotenv').config();
const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL || "";

mongoose
	.connect(DB_URL)
	.then(res => console.log('Connected to database successfully!'))
	.catch(err =>
		console.log('Failed to connect to database: ', err.toString())
	);
