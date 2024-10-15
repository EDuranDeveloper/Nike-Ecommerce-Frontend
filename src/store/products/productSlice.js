// src/redux/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    selectedProduct: [],
    selectedSize: '',
    selectedColor: '',
    loading: false,
    error: null,
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, { payload }) => {
            state.products = payload
            state.loading = false
            state.error = null
        },
        setSelectedProduct: (state, { payload }) => {
            state.selectedProduct = payload
        },
        setSelectedSize: (state, { payload }) => {
            state.selectedSize = payload
        },
        settSelectedColor: (state, { payload }) => {
            state.selectedColor = payload;
        },
        setLoading: (state, { payload }) => {
            state.loading = true
        },
        setError: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    },
});

// Exportar acciones
export const {
    setProducts,
    setSelectedProduct,
    setSelectedSize,
    setSelectedColor,
    setLoading,
    setError,
} = productSlice.actions;

