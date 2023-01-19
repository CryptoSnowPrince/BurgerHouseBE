var Mongoose = require("mongoose");

const { Schema } = Mongoose;

const UserSchema = Schema({
    ipAddress: {
        type: String,
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = Mongoose.model('User', UserSchema);