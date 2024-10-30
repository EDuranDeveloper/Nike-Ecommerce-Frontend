import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
    loading: false,
    error: null,
  },
  reducers: {
    setProducts: (state, { payload }) => {
      state.favorites = payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, { payload }) => {
        state.loading = true
        state.error = null
    },
    setError: (state, { payload }) => {
        state.loading = false
        state.error = payload
    }
  },
});

export const { increment } = favoritesSlice.actions;
