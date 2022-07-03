const { StatusCodes } = require('http-status-codes');
const PropertyModel = require('../models/property.model');
const APIError = require('../services/error.service');
const APIResponse = require('../services/response.service');

const getAllProperties = async (req, res, next) => {

	const properties = await PropertyModel.find({});

    return APIResponse.ok('properties fetched successfully!', properties);
};

const getProperty = async (req, res) => {

	const { propertyId } = req.params;

	if (!propertyId) {
		return APIError.badRequest('propertyId is mandatory!');
	}

	const property = await PropertyModel.findOne({ propertyId });

	if (!property) {
		return APIResponse.notFound('propertyId is invalid!');
	}

	return APIResponse.ok('property fetched successfully!', [property]);
};

const postProperty = async (req, res) => {

	const payload = req.body;

	await PropertyModel.create(payload);

	return APIResponse.created('property created successfully!');
};

const updateProperty = async (req, res) => {

	const payload = req.body;
	const { propertyId } = req.params;

	await PropertyModel.updateOne(
		{ propertyId },
		{ $set: payload },
		{ upsert: false }
	);

	return APIResponse.ok('property updated successfully!');
};

const deleteProperty = async (req, res) => {

	const { propertyId } = req.params;

	await PropertyModel.deleteOne({ propertyId });

	return APIResponse.ok('property deleted successfully!');
};

module.exports = {
	getAllProperties,
	getProperty,
	postProperty,
	updateProperty,
	deleteProperty,
};
