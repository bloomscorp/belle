const {StatusCodes} = require('http-status-codes');
const EventLogModel = require('../models/eventLog.model');
const APIError = require('../services/error.service');
const APIResponse = require('../services/response.service');

const getAllEventLogs = async (req, res, next) => {

    const eventLogs = await EventLogModel.find({});

    return APIResponse.ok('event logs fetched successfully', eventLogs);
}

const postEventLog = async (req, res) => {

    const payload = req.body;

    await EventLogModel.create(payload);

    return APIResponse.created('event log created successfully');
}

module.exports = {
    getAllEventLogs,
    postEventLog
}
