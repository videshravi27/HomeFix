const express = require('express');
const router = express.Router();
const providerController = require('../controllers/providerController');

// Routes for service providers
router.get('/', providerController.getServiceProviders);
router.get('/:id', providerController.getServiceProviderById);
router.post('/', providerController.createServiceProvider);
router.put('/:id', providerController.updateServiceProvider);
router.delete('/:id', providerController.deleteServiceProvider);

module.exports = router;