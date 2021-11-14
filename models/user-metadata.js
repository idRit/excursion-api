const mongoose = require('mongoose');

const startSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('start-locations', startSchema);