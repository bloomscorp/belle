const mongoose = require('mongoose');
// const { getUniqueId } = require('../utils/utils');
const ConstantsService = require('../services/constant.service');
const autoIncrement = require('./sequence.model');

const EventLogSchema = new mongoose.Schema({
	eventLogId: {
		type: Number,
		// default: getUniqueId(),
		index: { unique: true },
	},
	eventId: {
		type: Number,
		required: true,
	},
	propertyId: {
		type: Number,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		required: true,
	},
	ipAddress: {
		type: String,
	},
	os: {
		type: String,
	},
	basicSystemSettings: {
		type: mongoose.Schema.Types.Mixed,
	},
	data: {
		type: mongoose.Schema.Types.Mixed,
	},
});

EventLogSchema.pre('save', function (next) {
	if (!this.isNew) {
		next();
		return;
	}

	autoIncrement(ConstantsService.EVENT_LOG_SEQ_ID, this, next);
});

module.exports = mongoose.model('EventLog', EventLogSchema);
