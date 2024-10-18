import { useDispatch, useSelector } from "react-redux";
import { cardApi } from "../api/cardApi";
import { onError, onGetCartUser, onLoadingCart } from "../store/cart/cartSlice";
import Swal from "sweetalert2";


// /:userId/:productId/add

export function useCartStore() {
    
        const dispatch = useDispatch()
        const { user } = useSelector(state => state.auth )
        const quantity = 1


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
            dispatch( onError(error) )
            throw error; 
        }

    }

    const startGetCartUser = async() => {
        const { data } = await cardApi.get(`/cart/${user.uid}`)

        dispatch( onGetCartUser(data.cart) )

        console.log(data);

    } 

    return {
        //Propiedades

        //Metodos
        startPostCartInUser,
        startGetCartUser,
    }
}



