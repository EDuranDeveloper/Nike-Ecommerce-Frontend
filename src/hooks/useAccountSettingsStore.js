import { useSelector } from "react-redux"
import { accountApi } from "../api/accountApi";

export const useAccountSettingsStore = () => {

    const { status, user: {uid}, errorMessage } = useSelector(state => state.auth )

    const startGetAccountSettingsUser = async() => {
        try {
            if (!uid) {
                console.error("No UID provided.");
                return;
            }

            const { data } = await accountApi.get(`/account/${uid}`);
            const { accountSettings } = data
            const { items } = accountSettings
            const [ first ] = items

        
            return first

            
        } catch (error) {
            console.log(error);
        }
    }

    const startPostAccountSettingsUser = async({birthdate, city, country, zip}) => {
        try {
            const { data }  = await accountApi.post(`/account/${uid}/add`,{ birthdate, country, city, zip});
            const { accountSettings } = data

            return accountSettings;
            
        } catch (error) {
            console.log(error);
        }
    }

    return {

        //METODOS
        startGetAccountSettingsUser,
        startPostAccountSettingsUser,
    }
}

