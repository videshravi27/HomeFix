import { useEffect } from 'react';
import { useProvidersContext } from '../hooks/useProvidersContext.js';

import StoredProvider from '../components/StoredProvider';

const Display = () => {
    const { providers, dispatch } = useProvidersContext()

    useEffect(() => {
        const fetchProviders = async () => {
            const response = await fetch('/api/services');
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_PROVIDERS', payload: json });
            }
        };

        fetchProviders();
    }, [dispatch]);

    return (
        <div className="grid grid-cols-3 gap-4 p-4 ml-10">
            {providers && providers.map((provider) => (
                <StoredProvider key={provider._id} provider={provider} />
            ))}
        </div>
    );
};

export default Display;
