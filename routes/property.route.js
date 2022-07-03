const router = require('express').Router();
const propertyController = require('../controllers/property.controller');
const auth = require('../middlewares/auth.middleware');

router
	.get('/', [auth.authorise], (req, res, next) => {
		propertyController.getAllProperties(req, res).then(next).catch(next);
	})
	.get('/:propertyId', [auth.authorise], (req, res, next) => {
		propertyController.getProperty(req, res).then(next).catch(next);
	})
	.post('/', [auth.authorise], (req, res, next) => {
		propertyController.postProperty(req, res).then(next).catch(next);
	})
	.put('/:propertyId', [auth.authorise], (req, res, next) => {
		propertyController.updateProperty(req, res).then(next).catch(next);
	})
	.delete('/:propertyId', [auth.authorise], (req, res, next) => {
		propertyController.deleteProperty(req, res).then(next).catch(next);
	});

module.exports = router;
