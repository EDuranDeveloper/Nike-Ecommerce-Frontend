import { useDispatch, useSelector } from "react-redux";
import { setError, setFavorites, setLoading, removeFavorite } from "../store/favorites/favoritesSlice";
import { favoriteApi } from "../api/favoriteApi";

export function useFavoriteStore() {
    
        const dispatch = useDispatch()
        const { loading, favorites, error } = useSelector(state => state.favorites )
        const { user } = useSelector(state => state.auth)

    const startGetFavorites = async() => {

        dispatch( setLoading() )    

        try {
            const { data } = await favoriteApi.get(`/favorites/${ user.uid }`);
            const { items } = data.favorites; 

            dispatch( setFavorites( items ) ); 

        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    const startPostFavoriteInUser = async( productId ) => {

        dispatch( setLoading() )

        try {
            await favoriteApi.post(`/favorites/${user.uid}/${productId}/add`);

        } catch (error) {
            console.error("Error add favorite:", error);
            
        }
        finally {
            await startGetFavorites()
        }

    }

    const startDeleteFavoriteInUser = async( productId ) => {
        try {
            dispatch( removeFavorite( productId ) )
            await favoriteApi.delete(`/favorites/${user.uid}/${productId}/remove`);
              
        } catch (error) {
            console.log(error);
        } 
    }




    return {
        //Propeidades
        loading,
        error,
        favorites,

        //Metodos
        startGetFavorites,
        startPostFavoriteInUser,
        startDeleteFavoriteInUser,
}
}


