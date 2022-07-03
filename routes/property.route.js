const router = require('express').Router();
const propertyController = require('../controllers/property.controller');

router
	.get('/', (req, res, next) => {
		propertyController.getAllProperties(req, res).then(next).catch(next);
	})
	.get('/:propertyId', (req, res, next) => {
		propertyController.getProperty(req, res).then(next).catch(next);
	})
	.post('/', (req, res, next) => {
		propertyController.postProperty(req, res).then(next).catch(next);
	})
	.put('/:propertyId', (req, res, next) => {
		propertyController.updateProperty(req, res).then(next).catch(next);
	})
	.delete('/:propertyId', (req, res, next) => {
		propertyController.deleteProperty(req, res).then(next).catch(next);
	});

module.exports = router;
