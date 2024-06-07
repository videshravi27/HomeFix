import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const StoredServices = ({ service }) => {
    return (
        <div className="bg-gray-100 rounded shadow p-4 mb-4 flex flex-col justify-start items-start w-full sm:w-64 md:w-72 ml-0 sm:ml-16 relative">
            <h4 className="text-xl font-bold text-primary">{service.name}</h4>
            <p className="text-gray-700 mt-3">Service: {service.servicesOffered.join(', ')}</p>
            <p className="text-gray-700">Location: {service.location}</p>
            <p className="text-gray-700">Available </p>
            <p className="text-gray-700 ml-2">From: {format(new Date(service.availableFrom), 'hh:mm a')}</p>
            <p className="text-gray-700 ml-2">To: {format(new Date(service.availableTill), 'hh:mm a')}</p>
            <p className="text-gray-700">Number: {service.contactNumber}</p>
            <p className="text-gray-700">Price: {service.price}</p>
            <p className="text-gray-700">Posted: {format(new Date(service.createdAt), 'PPpp')}</p>
            <a href={`tel:${service.contactNumber}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">Call</a>
            <Link to="/review" state={{ serviceId: service._id }} className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded">Review</Link>
        </div>
    );
};

export default StoredServices;
