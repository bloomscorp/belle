const router = require('express').Router();
const propertyController = require('../controllers/property.controller');

router
    .get('/', propertyController.getAllProperties)
    .get('/:propertyId', propertyController.getProperty)
    .post('/', propertyController.postProperty)
    .put('/:propertyId', propertyController.updateProperty)
    .delete('/:propertyId', propertyController.deleteProperty);

module.exports = router;
