const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    servicesOffered: {
        type: [String],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    availableFrom: {
        type: Date,
        required: true
    },
    availableTill: {
        type: Date,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);