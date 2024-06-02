const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const providerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    servicesOffered: {
        type: String,
        required: true
    },
    location: {
        type: String,
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

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;