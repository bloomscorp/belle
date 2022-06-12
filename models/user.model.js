
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    emailId: {
        type: String,
        required: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;