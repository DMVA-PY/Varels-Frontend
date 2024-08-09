// userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  first_name: string | null;
  last_name: string | null;
}

const initialState: UserState = {
  first_name: null,
  last_name: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ first_name: string; last_name: string }>) => {
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
    },
    clearUser: state => {
      state.first_name = null;
      state.last_name = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
