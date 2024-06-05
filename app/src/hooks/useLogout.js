import { useAuthContext } from './useAuthContext'
import { useServicesContext } from './useServicesContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: dispatchWorkouts } = useServicesContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({ type: 'LOGOUT' })
        dispatchWorkouts({ type: 'SET_SERVICES', payload: null })
    }

    return { logout }
}