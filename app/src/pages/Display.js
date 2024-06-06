import { useEffect, useState } from 'react';
import { useServicesContext } from '../hooks/useServicesContext';
import { useAuthContext } from '../hooks/useAuthContext';

import StoredServices from '../components/StoredServices';

const Display = () => {
    const { services, dispatch } = useServicesContext();
    const { user } = useAuthContext();
    const [locationQuery, setLocationQuery] = useState('');
    const [serviceQuery, setServiceQuery] = useState('');

    useEffect(() => {
        const fetchServices = async () => {
            const response = await fetch('/api/services', {
                headers: {'Authorization': `Bearer ${user.token}`},
            });
            const json = await response.json();
            
            if (response.ok) {
                dispatch({ type: 'SET_SERVICES', payload: json });
            }
        }

        if(user) {
            fetchServices();
        }
    }, [dispatch, user]);

    // Filter services based on location and service query
    const filteredServices = services.filter(service => {
        const locationMatch = service.location.toLowerCase().includes(locationQuery.toLowerCase());
        const serviceMatch = service.servicesOffered.join(', ').toLowerCase().includes(serviceQuery.toLowerCase());
        return locationMatch && serviceMatch;
    });

    return (
        <div className="ml-10">
            <div className="mt-10 mb-4 flex flex-col justify-center items-center">
                <label htmlFor="location" className="mb-2">Location:</label>
                <input
                    id="location"
                    type="text"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    className="border p-2 rounded w-48"
                />
                <label htmlFor="service" className="mb-2 mt-4">Service Offered:</label>
                <input
                    id="service"
                    type="text"
                    value={serviceQuery}
                    onChange={(e) => setServiceQuery(e.target.value)}
                    className="border p-2 rounded w-48"
                />
            </div>
            <div className="grid grid-cols-3 gap-4 p-4">
                {filteredServices.map((service) => (
                    <StoredServices key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Display;
