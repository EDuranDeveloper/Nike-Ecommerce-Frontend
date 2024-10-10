import { useDispatch, useSelector } from "react-redux"
import { authApi } from "../api/authApi";

export function useAuthStore() {
 
    const { status, user, errorMessage } = useSelector(state => state.auth)
    const dispatch = useDispatch()


    const startLogin = async({ email, password }) => {
        try {
            
            const { data } = await authApi.post('/auth', { email, password });
            console.log(data)
            
        } catch (error) {
            console.log(error)
        }


    }
 
 
    return {

        //Propiedades
        status,
        user,
        errorMessage,

        //Metodos
        startLogin,
    }
}
