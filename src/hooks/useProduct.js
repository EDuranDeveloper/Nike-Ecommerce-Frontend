import { useState, useEffect } from "react";
import { getProducts } from '../helpers/getProducts.js';


export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData); 
      } catch (error) {
        setError(error); 
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchProducts();
  }, []);

  return { products, loading, error }; 
};
