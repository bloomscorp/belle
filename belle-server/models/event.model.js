const mongoose = require('mongoose');
// const { getUniqueId } = require('../utils/utils');
const ConstantsService = require('../services/constant.service');
const autoIncrement = require('./sequence.model');

const EventSchema = new mongoose.Schema(
	{
		eventId: {
			type: Number,
			// default: getUniqueId(),
			index: { unique: true },
		},
		eventType: {
			type: String,
			required: true,
		},
		propertyId: {
			type: Number,
			required: true,
		},
		name: {
			type: String,
			required: true,
			trim: true
		},
	},
	{
		timestamps: true,
	}
);

EventSchema.pre('save', function (next) {
	if (!this.isNew) {
		next();
		return;
	}

	autoIncrement(ConstantsService.EVENT_SEQ_ID, this, next);
});

module.exports = mongoose.model('Event', EventSchema);
