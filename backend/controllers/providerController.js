const ServiceProvider = require('../models/providerModel');

// Get all service providers
const getServiceProviders = async (req, res) => {
    try {
        const providers = await ServiceProvider.find({});
        res.status(200).json(providers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single service provider by ID
const getServiceProviderById = async (req, res) => {
    try {
        const { id } = req.params;
        const provider = await ServiceProvider.findById(id);
        if (!provider) {
            return res.status(404).json({ error: 'Service provider not found' });
        }
        res.status(200).json(provider);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new service provider
const createServiceProvider = async (req, res) => {
    try {
        const newServiceProvider = new ServiceProvider(req.body);
        await newServiceProvider.save();
        res.status(201).json(newServiceProvider);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a service provider by ID
const updateServiceProvider = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProvider = await ServiceProvider.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProvider) {
            return res.status(404).json({ error: 'Service provider not found' });
        }
        res.status(200).json(updatedProvider);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a service provider by ID
const deleteServiceProvider = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProvider = await ServiceProvider.findByIdAndDelete(id);
        if (!deletedProvider) {
            return res.status(404).json({ error: 'Service provider not found' });
        }
        res.status(200).json(deletedProvider);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getServiceProviders,
    getServiceProviderById,
    createServiceProvider,
    updateServiceProvider,
    deleteServiceProvider
};