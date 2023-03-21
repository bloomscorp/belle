const mongoose = require('mongoose');
const { getUniqueId } = require('../utils/utils');

const UserSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			default: getUniqueId(),
			index: { unique: true },
		},
		emailId: {
			type: String,
			required: true,
			trim: true,
			index: { unique: true },
		},
		password: {
			type: String,
			required: true,
			trim: true,
		},
		username: {
			type: String,
			required: true,
			trim: true,
		},
		phoneNo: {
			type: String,
			trim: true,
		},
		profileImageUrl: {
			type: String,
			trim: true,
		},
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('User', UserSchema);
