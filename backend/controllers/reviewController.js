const Review = require('../models/reviewModel');
const mongoose = require('mongoose');

// Get all reviews
const getAllReviews = async (req, res) => {
    const { id } = req.params
    
    const reviews = await Review.find(id).sort({ createdAt: -1});
    res.status(200).json(reviews);
};

// Get reviews by service ID
const getReviewsByService = async (req, res) => {
    const { service_id } = req.params;
    try {
        const reviews = await Review.find({ service_id });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Create a new review
const createReview = async (req, res) => {
    const { review, rating, service_id } = req.body;
    const user_id= req.user._id;

    let emptyFields = [];

    if (!review) emptyFields.push('review')
    if (!rating) emptyFields.push('rating')
    if (!service_id) emptyFields.push('service_id');
    if (!user_id) emptyFields.push('user_id');

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields });
    }

    try {
        const newReview = await Review.create({ review, rating, service_id, user_id });
        res.status(200).json(newReview);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a review by ID
const updateReview = async (req, res) => {
    const { id } = req.params;
    const { review, rating } = req.body;
    try {
        const updatedReview = await Review.findByIdAndUpdate(id, { review, rating }, { new: true });
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a review by ID
const deleteReview = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedReview = await Review.findByIdAndDelete(id);
        if (deletedReview) {
            res.status(200).json({ message: 'Review deleted successfully' });
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getAllReviews,
    getReviewsByService,
    createReview,
    updateReview,
    deleteReview
};
