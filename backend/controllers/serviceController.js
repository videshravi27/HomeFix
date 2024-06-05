const mongoose = require('mongoose');
const Service = require('../models/serviceModel');

// Get all service providers
const getServiceProviders = async (req, res) => {
    try {
        const services = await Service.find({}).sort({ createdAt: -1 });
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch services' });
    }
};

// Get a single service provider by ID
const getServiceProviderById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid service ID' });
    }

    try {
        const service = await Service.findById(id);

        if (!service) {
            return res.status(404).json({ error: 'No service found' });
        }

        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch the service' });
    }
};

// Create a new service provider
const createServiceProvider = async (req, res) => {
    const { name, servicesOffered, location, availableFrom, availableTill, contactNumber, price } = req.body;

    let emptyFields = [];

    if (!name) emptyFields.push('name');
    if (!servicesOffered) emptyFields.push('servicesOffered');
    if (!location) emptyFields.push('location');
    if (!availableFrom) emptyFields.push('availableFrom');
    if (!availableTill) emptyFields.push('availableTill');
    if (!contactNumber) emptyFields.push('contactNumber');
    if (!price) emptyFields.push('price');

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields });
    }

    try {
        const service = await Service.create({ name, servicesOffered, location, availableFrom, availableTill, contactNumber, price });
        res.status(201).json(service);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a service provider by ID
const deleteServiceProvider = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid service ID' });
    }

    try {
        const service = await Service.findOneAndDelete({ _id: id });

        if (!service) {
            return res.status(400).json({ error: 'No such service' });
        }

        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the service' });
    }
};

// Update a service provider by ID
const updateServiceProvider = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid service ID' });
    }

    try {
        const service = await Service.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });

        if (!service) {
            return res.status(400).json({ error: 'No such service' });
        }

        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the service' });
    }
};

module.exports = {
    getServiceProviders,
    getServiceProviderById,
    createServiceProvider,
    deleteServiceProvider,
    updateServiceProvider
};
