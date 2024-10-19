import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartUser: [],
        errorMessage: undefined,
        loading: undefined
    },
    reducers: {
        onGetCartUser: (state, { payload }  ) => {
            state.cartUser = payload
            state.errorMessage = undefined
            state.loading = undefined
        },
        onLoadingCart: (state, { payload }) => {
            state.loading = true
        },
        onErrorCart: (state, { payload }) => {
            state.errorMessage = payload
        }
    }
});

export const { onGetCartUser, onLoadingCart, onErrorCart } = cartSlice.actions;