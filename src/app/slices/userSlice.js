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
    addProduct: (state, action) => {
      const { userId, product } = action.payload;
      const user = state.lastLoggedInUser;

      if (user && user.id === userId) {
        user.cart.push(product);
      }
    },
    removeProduct: (state, action) => {
      const { userId, productId } = action.payload;
      const user = state.lastLoggedInUser;

      if (user && user.id === userId) {
        const index = user.cart.findIndex(
          (product) => product.id === productId
        );
        if (index !== -1) {
          user.cart.splice(index, 1); // Remove the item from the array
        }
      }
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
  addProduct,
  removeProduct,
  addFavoriteProduct,
  removeFavoriteProduct,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
