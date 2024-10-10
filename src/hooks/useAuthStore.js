import { useDispatch, useSelector } from "react-redux"
import { authApi } from "../api/authApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";
import Swal from "sweetalert2";

export function useAuthStore() {
 
    const { status, user, errorMessage } = useSelector(state => state.auth )
    const dispatch = useDispatch()


    const startLogin = async({ email, password }) => {

        dispatch( onChecking() )
        try {
            const { data } = await authApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token )
            localStorage.setItem('token-init-date', new Date().getTime() )
            dispatch ( onLogin({ name: data.name, uid: data.uid }) )
            
            
            
            
        } catch (error) {
            dispatch( onLogout("Incorrect credentials"))
            setTimeout(() => {
                dispatch( clearErrorMessage() )
            }, 10);
        }
        
        
    }


    const startRegister = async({ confirmPassword, password, email, name }) => {

        dispatch( onChecking() )

        try {
            const { data } = await authApi.post('/auth/new', { confirmPassword, password, email, name });
            localStorage.setItem('token', data.token )
            localStorage.setItem('token-init-date', new Date().getTime() )
            
            dispatch( onLogin( { name: data.name, uid: data.uid } ) )

            Swal.fire({ title: "Good job!", text: "You are register now!", icon: "success" });

        } catch (error) {
            dispatch( onLogout(error.response.data?.msg || "Error in register"))
            setTimeout(() => {
                dispatch( clearErrorMessage() )
            }, 10);
        }
    }
 
 
    return {

        //Propiedades
        status,
        user,
        errorMessage,

        //Metodos
        startLogin,
        startRegister
    }
}
