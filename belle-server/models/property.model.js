const mongoose = require('mongoose');
// const { getUniqueId } = require('../utils/utils');
const ConstantsService = require('../services/constant.service');
const autoIncrement = require('./sequence.model');

const PropertySchema = new mongoose.Schema(
	{
		propertyId: {
			type: Number,
			// default: getUniqueId(),
			index: { unique: true },
		},
		name: {
			type: String,
			required: true,
			trim: true,
		},
		url: {
			type: String,
			required: true,
			trim: true,
		},
		userId: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

PropertySchema.pre('save', function (next) {
	if (!this.isNew) {
		next();
		return;
	}

	autoIncrement(ConstantsService.PROPERTY_SEQ_ID, this, next);
});

module.exports = mongoose.model('Property', PropertySchema);
