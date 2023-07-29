// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    lastLoggedInUser: null,
  },
  reducers: {
    setLastLoggedInUser: (state, action) => {
      state.lastLoggedInUser = action.payload;
    },
    addFavoriteProduct: (state, action) => {
      const { userId, product } = action.payload;
      const user = state.lastLoggedInUser;

      if (user && user.id === userId) {
        user.favoriteProducts.push(product);
      }
    },
    removeFavoriteProduct: (state, action) => {
      const { userId, productId } = action.payload;
      const user = state.lastLoggedInUser;

      if (user && user.id === userId) {
        user.favoriteProducts = user.favoriteProducts.filter(
          (product) => product.id !== productId
        );
      }
    },
  },
});

export const {
  setLastLoggedInUser,
  addFavoriteProduct,
  removeFavoriteProduct,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
