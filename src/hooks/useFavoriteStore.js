import { useDispatch, useSelector } from "react-redux";
import { setError, setFavorites, setLoading, removeFavorite } from "../store/favorites/favoritesSlice";
import { favoriteApi } from "../api/favoriteApi";
import Swal from "sweetalert2";

export function useFavoriteStore() {
    
        const dispatch = useDispatch()
        const { loading, favorites, error } = useSelector(state => state.favorites )
        const { user } = useSelector(state => state.auth)
        const { uid } = user

    const startGetFavorites = async() => {

        dispatch( setLoading() )    

        try {
            const { data } = await favoriteApi.get(`/favorites/${ uid }`);
            const { items } = data.favorites; 

            dispatch( setFavorites( items ) ); 

        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    const startPostFavoriteInUser = async({ currentProduct }) => {

        dispatch( setLoading() )

        try {
            await favoriteApi.post(`/favorites/${user.uid}/${currentProduct._id}/add`);

            Swal.fire({
                title: "Added to favorites!",
                text: `${currentProduct.name} - ${currentProduct.color}`,
                icon: "success"
              });
              
        } catch (error) {
            console.error("Error add favorite:", error);
            // dispatch( setError(error) )
            // throw error; 
        }

    }

    const startDeleteFavoriteInUser = async( currentProductId ) => {
        try {
            dispatch( removeFavorite( currentProductId ) )
            await favoriteApi.delete(`/favorites/${user.uid}/${currentProductId}/remove`);
              
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


