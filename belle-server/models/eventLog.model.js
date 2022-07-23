const mongoose = require('mongoose');
const {getUniqueId} = require('../utils/utils');

const EventLogSchema = new mongoose.Schema({
    eventLogId: {
        type: String,
        default: getUniqueId(),
        index: {unique: true}
    },
    eventId: {
        type: String,
        required: true
    },
    propertyId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    ipAddress: {
        type: String,
    },
    OS: {
        type: String,
    },
    basicSystemSettings: {
        type: String,
    }
});
