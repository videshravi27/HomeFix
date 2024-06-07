import { useParams } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
import { useEffect, useState } from 'react';

const ServiceDetail = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        const fetchService = async () => {
            const response = await fetch(`/api/services/${id}`);
            const json = await response.json();
            if (response.ok) {
                setService(json);
            }
        };

        fetchService();
    }, [id]);

    if (!service) {
        return <p>Loading service details...</p>;
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">{service.name}</h2>
            <p>Services Offered: {service.servicesOffered.join(', ')}</p>
            <p>Location: {service.location}</p>
            <p>Available From: {new Date(service.availableFrom).toLocaleString()}</p>
            <p>Available Till: {new Date(service.availableTill).toLocaleString()}</p>
            <p>Contact Number: {service.contactNumber}</p>
            <p>Price: ${service.price}</p>
            <ReviewForm serviceId={service._id} />
            <ReviewList serviceId={service._id} />
        </div>
    );
};

export default Service
