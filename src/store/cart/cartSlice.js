import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartUser: [],
        errorMessage: undefined,
        loading: undefined,
    },
    reducers: {
        onGetCartUser: (state, { payload }) => {
            state.cartUser = payload;
            state.errorMessage = undefined;
            state.loading = undefined;
        },
        onLoadingCart: (state) => {
            state.loading = true;
        },
        onErrorCart: (state, { payload }) => {
            state.errorMessage = payload;
            state.loading = false;
        },
    }
});

export const { onGetCartUser, onLoadingCart, onErrorCart, onUpdateQuantityInCart } = cartSlice.actions;
export default cartSlice.reducer;
