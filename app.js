require('dotenv').config();
const initDatabase = require('./services/database.service');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

// routes
const authRoutes = require('./routes/auth.route');
const propertyRoutes = require('./routes/property.route');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: false }));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/property', propertyRoutes);

// for testing only
app.get('/ping', (req, res) => {
	res.status(200).json({
		success: true,
		message: 'Server is running!',
	});
});

const startServer = async () => {
	try {
		await initDatabase();
		app.listen(PORT, () =>
		  console.log(`Server is listening on port ${PORT}...`)
		);
	} catch (err) {
		console.log(err);
	}
}

startServer();