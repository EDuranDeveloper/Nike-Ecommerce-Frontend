import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { productSlice } from './products/productSlice';
import { cartSlice } from './cart/cartSlice';
import { favoritesSlice } from './favorites/favoritesSlice';


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        product: productSlice.reducer,
        cart: cartSlice.reducer,
        favorites: favoritesSlice.reducer
    },
})