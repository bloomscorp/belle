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
        default: Date.now,
        required: true
    },
    ipAddress: {
        type: String,
    },
    os: {
        type: String,
    },
    basicSystemSettings: {
        type: String,
    },
    data: {
        type: mongoose.Schema.Types.Mixed
    }
});

module.exports = mongoose.model('EventLog', EventLogSchema);
