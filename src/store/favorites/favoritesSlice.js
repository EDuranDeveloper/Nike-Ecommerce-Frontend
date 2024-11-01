import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
    loading: false,
    error: null,
  },
  reducers: {
    setFavorites: (state, { payload }) => {
      state.favorites = payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    removeFavorite: (state, { payload }) => {
      console.log(payload);
      state.favorites = state.favorites.filter(
        (favorite) => favorite.productId !== payload
      );
    },
  },
});

export const { setFavorites, setLoading, setError, removeFavorite } = favoritesSlice.actions;
