import { useState, useEffect } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";
import StoredServices from './StoredServices';

const UserServices = () => {
    const { user } = useAuthContext();
    const [userServices, setUserServices] = useState([]);

    useEffect(() => {
        const fetchUserServices = async () => {
            try {
                if (!user) {
                    throw new Error('You must be logged in to view your services');
                }

                const response = await fetch(`/api/services/${user._id}`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}` 
                    }
                });
                
                if (!response.ok) {
                    throw new Error('Failed to fetch your services');
                }

                const data = await response.json();
                setUserServices(data);
            } catch (error) {
                console.error('Error fetching user services:', error);
            }
        };

        fetchUserServices();
    }, [user]);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Your Services</h2>
            {userServices.map(service => (
                <StoredServices key={service._id} service={service} />
            ))}
        </div>
    );
};

export default UserServices;
