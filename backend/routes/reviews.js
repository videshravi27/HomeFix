const express = require('express');

const {
    getAllReviews,
    getReviewsByService,
    createReview,
    updateReview,
    deleteReview
} = require('../controllers/reviewController')

const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth)

router.get('/', getAllReviews);
router.get('/service/:service_id', getReviewsByService);
router.post('/', createReview);
router.patch('/:id', updateReview);
router.delete('/:id', deleteReview);

module.exports = router;
