const Service = require('../models/serviceModel');
const mongoose = require('mongoose');

// Get all service providers
const getServiceProviders = async (req, res) => {
    try{
        const services = await Service.find({}).sort({ createdAt: -1 })
        res.status(200).json(services)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

// Get a single service provider by ID
const getServiceProviderById = async (req, res) => {
    const user_id = req.user._id;

    if (!mongoose.Types.ObjectId.isValid(user_id)) {
        return res.status(404).json({ error: 'Invalid service ID' });
    }

    const service = await Service.find({ user_id });

    if (!service) {
        return res.status(404).json({ error: 'No service found' });
    }

    res.status(200).json(service);
};

// Create a new service provider
const createServiceProvider = async (req, res) => {
    const { name, servicesOffered, location, availableFrom, availableTill, contactNumber, price } = req.body

    let emptyFields = []

    if (!name) emptyFields.push('name')
    if (!servicesOffered) emptyFields.push('servicesOffered')
    if (!location) emptyFields.push('location')
    if (!availableFrom) emptyFields.push('availableFrom')
    if (!availableTill) emptyFields.push('availableTill')
    if (!contactNumber) emptyFields.push('contactNumber')
    if (!price) emptyFields.push('price')

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields });
    }

    try {
        const user_id = req.user._id;
        const service = await Service.create({ name, servicesOffered, location, availableFrom, availableTill, contactNumber, price, user_id });
        res.status(200).json(service);
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

    const service = await Service.findOneAndDelete({ _id: id, user_id: req.user._id });

    if (!service) {
        return res.status(400).json({ error: 'No such service' });
    }

    res.status(200).json({ message: 'Service deleted successfully' });
    
}

// Update a service provider by ID
const updateServiceProvider = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid service ID' });
    }

    const service = await Service.findOneAndUpdate({_id: id}, {
        ...req.body 
    })

    if (!service) {
        return res.status(400).json({ error: 'No such service' });
    }

    res.status(200).json(service);
};

module.exports = {
    getServiceProviders,
    getServiceProviderById,
    createServiceProvider,
    deleteServiceProvider,
    updateServiceProvider
};

