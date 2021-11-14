const mongoose = require('mongoose');

const endSchema = new mongoose.Schema({
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    rider_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    picked_up_at: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    dropped_at: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    total_cost: {
        type: Number,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('end-locations', endSchema);