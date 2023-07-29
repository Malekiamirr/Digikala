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
  },
});

export const { setLastLoggedInUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
