import { useEffect } from 'react';
import { useServicesContext } from '../hooks/useServicesContext';

import StoredServices from '../components/StoredServices';

const Display = () => {
    const { services, dispatch } = useServicesContext();

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('/api/services');
                const json = await response.json();

                if (response.ok) {
                    dispatch({ type: 'SET_SERVICES', payload: json });
                } else {
                    console.error('Failed to fetch services:', json);
                }
            } catch (error) {
                console.error('An error occurred while fetching services:', error);
            }
        };

        fetchServices();
    }, [dispatch]);

    return (
        <div className="grid grid-cols-3 gap-4 p-4 ml-10">
            {services && services.map((service) => (
                <StoredServices key={service._id} service={service} />
            ))}
        </div>
    );
};

export default Display;
