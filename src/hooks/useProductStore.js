import { useDispatch, useSelector } from "react-redux";
import { productApi } from "../api/productApi";
import { setError, setLoading, setProducts, setSelectedProduct } from "../store/products/productSlice";

export function useProductStore() {
    
        const dispatch = useDispatch()
        const { loading, products, error, selectedProduct } = useSelector(state => state.product )

    const startGetProducts = async() => {

        dispatch( setLoading() )    

        try {
            const { data } = await productApi.get("/products/");
            const products = data.products; 

    
            dispatch(setProducts(products));
        } catch (error) {
            console.error("Error fetching products:", error);
            dispatch( setError(error) )
            throw error; 
        }
    }

    const startGetCurrentProduct = ( product ) => {
        dispatch( setSelectedProduct( product ) )
    }


    return {
        //Propeidades
        loading,
        error,
        products,
        selectedProduct,
    
        //Metodos
        startGetProducts,
        startGetCurrentProduct,
}
}


