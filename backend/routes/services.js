const express = require('express');

const {
    getServiceProviders,
    getServiceProviderById,
    createServiceProvider,
    deleteServiceProvider,
    updateServiceProvider
} = require('../controllers/serviceController')

const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth)

// Routes for service providers
router.get('/', getServiceProviders);
router.get('/:id', getServiceProviderById);
router.post('/', createServiceProvider);
router.delete('/:id', deleteServiceProvider);
router.patch('/:id', updateServiceProvider);

module.exports = router;