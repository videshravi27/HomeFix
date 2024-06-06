import { useServicesContext } from "../hooks/useServicesContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { format } from 'date-fns';

const StoredServices = ({ service }) => {
    const { dispatch } = useServicesContext();
    const { user } = useAuthContext();

    const handleClick = async () => {
        if(!user){
            return
        }
        const response = await fetch('/api/services/' + service._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ' ${user.token}`
            }
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_SERVICE', payload: json });
        }
    };

    return (
        <div className="bg-gray-100 rounded shadow p-4 mb-4 flex flex-col justify-start items-start w-full sm:w-64 md:w-72 ml-0 sm:ml-16 relative">
            <span onClick={handleClick} className="absolute top-2 right-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2">
                    <path d="M3 6h18"/>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    <line x1="10" x2="10" y1="11" y2="17"/>
                    <line x1="14" x2="14" y1="11" y2="17"/>
                </svg>
            </span>
            <h4 className="text-xl font-bold text-primary">{service.name}</h4>
            <p className="text-gray-700 mt-3">Service: {service.servicesOffered.join(', ')}</p>
            <p className="text-gray-700">Location: {service.location}</p>
            <p className="text-gray-700">Available </p>
            <p className="text-gray-700 ml-2">From: {format(new Date(service.availableFrom), 'hh:mm a')}</p>
            <p className="text-gray-700 ml-2">To: {format(new Date(service.availableTill), 'hh:mm a')}</p>
            <p className="text-gray-700">Number: {service.contactNumber}</p>
            <p className="text-gray-700">Price: {service.price}</p>
            <p className="text-gray-700">Posted: {format(new Date(service.createdAt), 'PPpp')}</p>
        </div>
    );
};

export default StoredServices;
