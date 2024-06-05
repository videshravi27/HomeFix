import { useState } from "react";
import { useServicesContext } from "../hooks/useServicesContext";

const CreateService = () => {
    const { dispatch } = useServicesContext();

    const [name, setName] = useState('');
    const [servicesOffered, setServicesOffered] = useState('');
    const [location, setLocation] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !servicesOffered || !location || !contactNumber || !price) {
            setError('Fill all fields');
            setSuccessMessage(null);
            return;
        }

        const services = { name, servicesOffered, location, contactNumber, price };

        const response = await fetch('/api/services', {
            method: 'POST',
            body: JSON.stringify(provider),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setSuccessMessage(null);
        }
        if (response.ok) {
            setName('');
            setServicesOffered('');
            setLocation('');
            setContactNumber('');
            setPrice('');
            setError(null);
            setSuccessMessage('Service added successfully!'); // Set success message
            dispatch({ type: 'CREATE_PROVIDER', payload: json });
        }
    };

    return (
        <div className="bg-gray-100 mt-10">
            <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold mb-4">Add your Service</h3>

                <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">Name: </label>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">Service Offered: </label>
                <input
                    type="text"
                    onChange={(e) => setServicesOffered(e.target.value)}
                    value={servicesOffered}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">Location: </label>
                <input
                    type="text"
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">Contact Number: </label>
                <input
                    type="text"
                    onChange={(e) => setContactNumber(e.target.value)}
                    value={contactNumber}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <label className="block text-gray-700 text-sm font-bold mb-2 mt-2">Price: </label>
                <input
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3">
                    Add Service
                </button>
                {error && <div className="text-red-500 text-xs italic mt-4">{error}</div>}
                {successMessage && <div className="text-green-500 text-xs italic mt-4">{successMessage}</div>} {/* Display success message */}
            </form>
        </div>
    );
};

export default CreateService;
