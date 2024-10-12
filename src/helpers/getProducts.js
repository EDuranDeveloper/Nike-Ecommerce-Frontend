import { productApi } from "../api/productApi";

export const getProducts = async () => {
    try {
        const { data } = await productApi.get("/products/");
        const { products } = data

        return products; 

        
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error; 
    }
};
