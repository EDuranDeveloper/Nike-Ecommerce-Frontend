import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { productSlice } from './products/productSlice';
import { cartSlice } from './cart/cartSlice';


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        product: productSlice.reducer,
        cart: cartSlice.reducer
    },
})