const mongoose = require('mongoose');
const {getUniqueId} = require('../utils/utils');

const EventSchema = new mongoose.Schema({
    eventId: {
        type: String,
        default: getUniqueId(),
        index: {unique: true}
    },
    eventType: {
        type: String,
        required: true
    },
    propertyId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        index: {unique: true}
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Event', EventSchema);
