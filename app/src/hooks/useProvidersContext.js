import { ProvidersContext } from "../context/ProviderContext"
import { useContext } from "react"

export const useProvidersContext = () => {
    const context = useContext(ProvidersContext)
    
    if(!context) {
        throw Error('useProvidersContext must be used inside an ProvidersContextProvider')
}

return context
}