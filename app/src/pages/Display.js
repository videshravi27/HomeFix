import { useEffect, useState } from 'react';
import StoredProvider from '../components/StoredProvider';

const Display = () => {
    const [providers, setProviders] = useState(null);
    
    useEffect(() => {
        const fetchProviders = async () => {
            const response = await fetch('/api/services');
            const json = await response.json();
            
            if (response.ok) {
                setProviders(json);
            }
        };
        fetchProviders();
    }, []);
    
    return (
    <div className="grid grid-cols-3 gap-4 p-4">
        <div className="col-span-2">
            {providers && providers.map((provider) => (
            <StoredProvider key={provider._id} provider={provider} />
            ))}
        </div>
    </div>
);
};

export default Display;
