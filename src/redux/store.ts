import { configureStore } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "./hooks";
import { apiSlice } from "./services/apiSlice";
import authReducer from './features/authSlice'


export const makeStore =()=>{
    return configureStore({
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer,
            auth: authReducer,
        },

        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(apiSlice.middleware),

        devTools: process.env.NODE_ENV !== 'production',
    }) 
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

/* This function returns a configured Redux store. By defining it as a function, you can create a new instance of the store whenever makeStore is called, which is especially useful in server-side rendering scenarios. */
/* configureStore is a utility provided by Redux Toolkit that simplifies the process of setting up a Redux store */
/* The reducer Object is where you define the slices of your Redux state and the reducers that will manage them. */
/* This slice manages the state related to API requests, including caching, loading states, etc. */
/* This adds an auth slice to the store, which will be managed by the authReducer. This slice likely handles authentication-related state (like user information, tokens, etc.) */
/* necessary to enable features like caching, invalidation, polling, and optimistic updates */
/* enables the Redux DevTools extension for easier debugging during development. */
