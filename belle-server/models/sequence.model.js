const mongoose = require('mongoose');

const SequenceSchema = new mongoose.Schema({
	_id: {
		type: String,
		required: true,
	},
	seq: {
		type: Number,
		default: 0,
	},
});

SequenceSchema.index({ _id: 1, seq: 1 }, { unique: true });

const SequenceModel = mongoose.model('sequence', SequenceSchema);

const autoIncrement = (modelName, doc, next) => {
	SequenceModel.findByIdAndUpdate(
		modelName,
		{ $inc: { seq: 1 } },
		{ new: true, upsert: true },
		function (error, counter) {
			if (error) return next(error);

			doc[modelName] = counter.seq;
			next();
		}
	);
};

module.exports = autoIncrement;
