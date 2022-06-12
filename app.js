require('dotenv').config();
require('./services/database.service');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const responseHandler = require('./middlewares/responseHandler');
const app = express();
const router = express.Router();

const PORT = process.env.PORT || 3000;
const CONTEXT_PATH = process.env.CONTEXT_PATH || '/api';

app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: false }));

// for testing only
app.get('/ping', (req, res) => {
	res.status(200).json({
		success: true,
		message: 'Server is running!',
	});
});

app.use(CONTEXT_PATH, router)
require('./routes/auth.route')(router);
app.use(responseHandler);

app.listen(PORT, () => `Server is listening at port ${PORT}`);
