const mongoose = require('mongoose');
const { getUniqueId } = require('../utils/utils');

const PropertySchema = new mongoose.Schema({
    propertyId: {
        type: String,
        default: getUniqueId(),
        index: { unique: true }
    },
    name: {
        type: String,
        required: true,
        trim: true,
        index: { unique: true }
    },
    url: {
        type: String,
        required: true,
        trim: true,
        index: { unique: true }
    },
    userId: {
        type: String,
        required: true
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

module.exports = mongoose.model('Property', PropertySchema);