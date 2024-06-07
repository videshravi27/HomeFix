import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useReviewsContext } from '../hooks/useReviewsContext'; 

const ReviewList = ({ serviceId }) => {
    const { user } = useAuthContext();
    const { reviews } = useReviewsContext(); // Get reviews from ReviewsContext using useReviewsContext hook
    const [filteredReviews, setFilteredReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                if (!user) {
                    throw new Error('You must be logged in to view reviews');
                }

                const response = await fetch(`/api/reviews/service/${serviceId}`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}` 
                    }
                });
                
                if (!response.ok) {
                    throw new Error('Failed to fetch reviews');
                }
                const data = await response.json();
                setFilteredReviews(data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, [serviceId, user]);

    useEffect(() => {
        // Filter reviews based on the current serviceId
        if (reviews) {
            const filtered = reviews.filter(review => review.service_id === serviceId);
            setFilteredReviews(filtered);
        }
    }, [reviews, serviceId]);

    return (
        <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">Reviews</h3>
            <ul>
                {Array.isArray(filteredReviews) && filteredReviews.length > 0 ? (
                    filteredReviews.map(review => (
                        <li key={review._id} className="mb-4">
                            <p className="mb-2">{review.review}</p>
                            <p className="text-sm text-gray-500">Rating: {review.rating}</p>
                        </li>
                    ))
                ) : (
                    <li>No reviews available</li>
                )}
            </ul>
        </div>
    );
};

export default ReviewList;
