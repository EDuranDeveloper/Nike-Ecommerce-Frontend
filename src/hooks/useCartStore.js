import { useDispatch, useSelector } from "react-redux";
import { cartApi } from "../api/cartApi";
import { onGetCartUser, onLoadingCart, onErrorCart } from "../store/cart/cartSlice";
import Swal from "sweetalert2";


// /:userId/:productId/add

export function useCartStore() {
    
        const dispatch = useDispatch()
        const { user } = useSelector(state => state.auth )
        const { cartUser, errorMessage, loading } = useSelector(state => state.cart )
        const quantity = 1

    const startPostCartInUser = async( productId ) => {

        try {
            await cartApi.post(`/cart/${user.uid}/${productId}/add`, { quantity });
              
        } catch (error) {
            console.error("Error add product:", error);
            dispatch( onErrorCart(error) )
            throw error; 
        }
        finally {
            await startGetCartUser()
        }

    }

    const startGetCartUser = async() => {

        try {
            const { data } = await cartApi.get(`/cart/${user.uid}`)
            dispatch( onGetCartUser(data.cart) )
        } catch (error) {
            console.log(error);
            dispatch( onErrorCart(error) )
            throw error; 
        }

    } 

    const startDeleteProductInCart = async( currentProductId ) => {

        try {
            await cartApi.delete(`/cart/${user.uid}/${currentProductId}/remove`);

            // Swal.fire({
            //     title: "Remove item!",
            //     // text: `${currentProduct.name} - ${currentProduct.color}`,
            //     icon: "success"
            //   });
            // dispatch( onNotLoadingCart() )
              
        } catch (error) {
            console.error("Error add product:", error);
            dispatch( onErrorCart(error) )
            throw error; 
        } 
        finally {
            await startGetCartUser();
        }

    }

    const startUpdateQuantityInCart = async (currentProductId, change) => {
        
        
        try {
            await cartApi.patch(`/cart/${user.uid}/${currentProductId}/update`, { quantity: change });   
        } catch (error) {
            console.error("Error updating product quantity:", error);
            dispatch(onErrorCart(error));
            throw error;
        }
         finally {
            await startGetCartUser();
         }
    };
    

    return {
        //Propiedades
        cartUser,
        loading,
        errorMessage,

        //Metodos
        startPostCartInUser,
        startGetCartUser,
        startDeleteProductInCart,
        startUpdateQuantityInCart,
    }
}



