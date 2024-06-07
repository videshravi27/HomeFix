import { useState } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";
import { useReviewsContext } from "../hooks/useReviewsContext";
import { useLocation } from 'react-router-dom';
import ReviewList from './ReviewList';

const ReviewForm = () => {
    const { user } = useAuthContext();
    const { dispatch } = useReviewsContext();
    const location = useLocation();
    const serviceId = location.state?.serviceId; // Retrieve serviceId from location state

    const [review, setReview] = useState('');
    const [rating, setRating] = useState(1);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Review:', review);
        console.log('Rating:', rating);
        console.log('Service ID:', serviceId);
        console.log('User ID:', user._id);
        
        if (!user) {
            setError('You must be logged in to submit a review');
            setSuccessMessage(null);
            return;
        }

        if (!review || !rating || !serviceId) {
            setError('Please fill in all fields');
            setSuccessMessage(null);
            return;
        }

        const newReview = { review, rating, service_id: serviceId, user_id: user._id };

        try {
            const response = await fetch('/api/reviews', {
                method: 'POST',
                body: JSON.stringify(newReview),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
            });
            const json = await response.json();

            if (!response.ok) {
                setError(json.error);
                setSuccessMessage(null);
            } else {
                console.log('Review created successfully:', json);
                setReview('');
                setRating(1);
                setError(null);
                setSuccessMessage('Review added successfully!');
                dispatch({ type: 'CREATE_REVIEW', payload: json });
            }
        } catch (error) {
            console.error('An error occurred while creating the review:', error);
            setError('An error occurred. Please try again.');
            setSuccessMessage(null);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-4">
                <h3 className="text-lg font-bold mb-4">Write a Review</h3>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0 pr-2">
                        <label className="block mb-2">Review:</label>
                        <textarea
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            className="border p-2 rounded w-full"
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2 pl-2">
                        <label className="block mb-2">Rating:</label>
                        <input
                            type="number"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className="border p-2 rounded w-full max-w-xs" // Adjusted width of rating box
                            min="1"
                            max="5"
                            required
                        />
                    </div>
                </div>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Submit Review</button>
                {error && <div className="text-red-500 mt-2">{error}</div>}
                {successMessage && <div className="text-green-500 text-xs italic mt-4">{successMessage}</div>}
            </form>
            {serviceId && <ReviewList serviceId={serviceId} />}
        </div>
    );
};

export default ReviewForm;
