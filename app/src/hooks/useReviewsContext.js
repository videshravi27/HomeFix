import { useContext } from 'react';
import { ReviewsContext } from '../context/ReviewsContext';

export const useReviewsContext = () => {
    const context = useContext(ReviewsContext);

    if (!context) {
        throw new Error('useReviewsContext must be used within a ReviewsContextProvider');
    }

    return context;
};
