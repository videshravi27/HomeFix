const express = require('express');

const {
    getServiceProviders,
    getServiceProviderById,
    createServiceProvider,
    deleteServiceProvider,
    updateServiceProvider
} = require('../controllers/serviceController')

const router = express.Router();

// Routes for service providers
router.get('/', getServiceProviders);
router.get('/:id', getServiceProviderById);
router.post('/', createServiceProvider);
router.put('/:id', updateServiceProvider);
router.delete('/:id', deleteServiceProvider);

module.exports = router;