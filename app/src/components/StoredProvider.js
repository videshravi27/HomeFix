import { useProvidersContext } from "../hooks/useProvidersContext";

import { format } from 'date-fns'

const StoredProvider = ({ provider }) => {
    const { dispatch } = useProvidersContext()

    const handleClick = async () => {
        // if(!user){
        //     return
        // }
        const response = await fetch('/api/services/' + provider._id, {
            method: 'DELETE',
            // headers: {
            //     'Authorization': `Bearer ${user.token}` 
            // }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_DETAIL', payload: json })
        }
    }

    return (
        <div className="bg-gray-100 rounded shadow p-4 mb-4 flex flex-col justify-start items-start w-full sm:w-64 md:w-72 ml-16">
            <h4 className="text-xl font-bold text-primary">Name: {provider.name}</h4>
            <p className="text-gray-600">Offered Service: {provider.servicesOffered}</p>
            <p className="text-gray-600">Location: {provider.location}</p>
            <p className="text-gray-600">Number: {provider.contactNumber}</p>
            <p className="text-gray-600">Price: {provider.price}</p>
            <p>Posted: {format(new Date(provider.createdAt), 'PPpp')}</p>
            <span onClick={handleClick}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></span>
        </div>
    );
};

export default StoredProvider;
