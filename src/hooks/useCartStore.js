import { useDispatch, useSelector } from "react-redux";
import { cardApi } from "../api/cardApi";
import { onGetCartUser, onLoadingCart, onErrorCart } from "../store/cart/cartSlice";
import Swal from "sweetalert2";


// /:userId/:productId/add

export function useCartStore() {
    
        const dispatch = useDispatch()
        const { user } = useSelector(state => state.auth )
        const { cartUser, errorMessage, loading } = useSelector(state => state.cart )
        const quantity = 1

        // console.log(user);


    const startPostCartInUser = async({ currentProduct }) => {

        dispatch( onLoadingCart() )

        try {
            await cardApi.post(`/cart/${user.uid}/${currentProduct._id}/add`, { quantity });

            Swal.fire({
                title: "Added to bag!",
                text: `${currentProduct.name} - ${currentProduct.color}`,
                icon: "success"
              });
              
        } catch (error) {
            console.error("Error add product:", error);
            dispatch( onErrorCart(error) )
            throw error; 
        }

    }

    const startGetCartUser = async() => {

        dispatch( onLoadingCart() )

        try {
            const { data } = await cardApi.get(`/cart/${user.uid}`)
            dispatch( onGetCartUser(data.cart) )
        } catch (error) {
            console.log(error);
            dispatch( onErrorCart(error) )
            throw error; 
        }

        // console.log(data);

    } 

    return {
        //Propiedades
        cartUser,
        loading,
        errorMessage,

        //Metodos
        startPostCartInUser,
        startGetCartUser,
    }
}



