import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean,
    isLoading: boolean,
}

const initialState = {
    isAuthenticated: false,
    isLoading: true,
} as AuthState;

const authSlice = createSlice({
    name:'auth',
    initialState,
    
    reducers: {
        setAuth: (state) => {
          state.isAuthenticated = true;
        },
        logout: (state) => {
          state.isAuthenticated = false;
        },
        finishInitialLoad: state => {
            state.isLoading = false;
        }
    }
})

export const { setAuth, logout, finishInitialLoad } = authSlice.actions;
export default authSlice.reducer;

/* This slice will handle authentication status, such as whether the user is logged in. */

/* authSlice defines how to handle authentication-related state updates in your Redux store. 
It sets up actions to manage authentication status and loading state, and provides a clear and structured way to manage this part of your application's state. */
