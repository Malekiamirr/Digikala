import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import loginReducer from './slices/loginSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
