import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartUser: {},
        errorMessage: null,
        loading: null
    },
    reducers: {
        onGetCartUser: (state, { payload }  ) => {
            state.cartUser = payload
            state.errorMessage = null
            state.loading = null
        },
        onLoadingCart: (state, { payload }) => {
            state.loading = true
        },
        onError: (state, { payload }) => {
            state.errorMessage = payload
        }
    }
});

export const { onGetCartUser, onLoadingCart, onError } = cartSlice.actions;