import React from 'react';

const StoredProvider = ({ provider }) => {
    return (
        <div className="bg-white rounded shadow p-4 mb-4 flex flex-col justify-center items-center w-full sm:w-64 md:w-72 ml-16">
            <h4 className="text-xl font-bold text-primary">{provider.name}</h4>
            <p className="text-gray-600">{provider.servicesOffered}</p>
            <p className="text-gray-600">{provider.location}</p>
            <p className="text-gray-600">{provider.contactNumber}</p>
            <p className="text-gray-600">Rs. {provider.price}</p>
        </div>
    );
};

export default StoredProvider;
