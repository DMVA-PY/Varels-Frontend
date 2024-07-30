import { configureStore } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "./hooks";
import { apiSlice } from "./services/apiSlice";
import authReducer from './features/authSlice'

export const makeStore =()=>{
    return configureStore({
        
        /* RTK QUERY */
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer
        },
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(apiSlice.middleware),
        devTools: process.env.NODE_ENV !== 'production',
    }) 
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];