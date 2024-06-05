import { ServicesContext } from '../context/ServicesContext';
import { useContext } from 'react';


export const useServicesContext = () => {
    const context = useContext(ServicesContext);

    if (!context) {
        throw new Error('useServicesContext must be used within a ServicesContextProvider');
    }

    return context;
};
