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
            dispatch ( onLogin({ name: data.name, email: data.email, uid: data.uid }) )
            
            Swal.fire({ title: "Welcome!", text: "You are login now!", icon: "success" });

            
            
            
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
            
            dispatch( onLogin( { name: data.name, email: data.email, uid: data.uid } ) )

            console.log("Register:", data?.uid);

            Swal.fire({ title: "Good job!", text: "You are register now!", icon: "success" });

        } catch (error) {
            dispatch( onLogout(error.response.data?.msg || "Error in register"))
            setTimeout(() => {
                dispatch( clearErrorMessage() )
            }, 10);
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem("token")
        if( !token ) return dispatch( onLogout() )
        
        try {
            const { data } = await authApi.get("/auth/renew")
             
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, email: data.email, uid: data.uid }) );

            
        } catch (error) {
            console.log(error)
            localStorage.clear()
            dispatch( onLogout() )
        }

    }

    const startLogout = () => {
        localStorage.clear()
        dispatch( onLogout() )
    }
 
 
    return {

        //Propiedades
        status,
        user,
        errorMessage,

        //Metodos
        startLogin,
        startRegister,
        startLogout,
        checkAuthToken,
    }
}
