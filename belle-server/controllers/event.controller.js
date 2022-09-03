const { StatusCodes } = require('http-status-codes');
const EventModel = require('../models/event.model');
const APIError = require('../services/error.service');
const APIResponse = require('../services/response.service');

const getAllEvents = async (req, res, next) => {

	const events = await EventModel.find({});

	return APIResponse.ok('events fetched successfully', events);
};

const getEvent = async (req, res) => {

	const { eventId } = req.params;

	if (!eventId) {
		return APIError.badRequest('eventId is mandatory');
	}

	const event = await EventModel.findOne({ eventId });

	if (!event) {
		return APIResponse.notFound('eventId is invalid');
	}

	return APIResponse.ok('event fetched successfully', [event]);
};

const postEvent = async (req, res) => {

    const { eventType, propertyId, name } = req.body;
    
    if (!eventType || !propertyId || !name) {
        return APIError.badRequest('Mandatory fields not found in request body!');
    }

	await EventModel.create({
		eventType,
		propertyId,
		name,
	});

	return APIResponse.created('event created successfully');
};

const updateEvent = async (req, res) => {

	const payload = req.body;
	const { eventId } = req.params;

	await EventModel.updateOne(
		{ eventId },
		{ $set: payload },
		{ upsert: false }
	);

	return APIResponse.ok('event updated successfully');
};

const deleteEvent = async (req, res) => {

	const { eventId } = req.params;

	await EventModel.deleteOne({ eventId });

	return APIResponse.ok('event deleted successfully');
};

module.exports = {
	getAllEvents,
	getEvent,
	postEvent,
	updateEvent,
	deleteEvent,
};
