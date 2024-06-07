import { useState, useEffect } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";
import UserStoredServices from './UserStoredServices';

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
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4 mt-3">Your Services</h2>
            <div className="flex flex-wrap -mx-2">
                {userServices.map(service => (
                    <div key={service._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                        <UserStoredServices service={service} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserServices;
