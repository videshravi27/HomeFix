import { createContext, useReducer } from "react";

export const ProvidersContext = createContext();

export const providersReducer = (state, action) => {
    switch(action.type) {
        case 'SET_PROVIDERS':
            return {
                providers: action.payload
            };
        case 'CREATE_PROVIDER':
            return {
                providers: [action.payload, ...state.providers]
            };
        case 'DELETE_PROVIDER':
            return {
                providers: state.providers.filter(provider => provider._id !== action.payload._id)
            };
        default:
            return state;
    }
}

export const ProvidersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(providersReducer, {
        providers: []
    });

    return (
        <ProvidersContext.Provider value={{...state, dispatch}}>
            {children}
        </ProvidersContext.Provider>
    );
}
