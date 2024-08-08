import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VisibilityState {
  isCarritoVisible: boolean;
}

const initialState: VisibilityState = {
  isCarritoVisible: false,
};

const carritoVisibilitySlice = createSlice({
  name: 'carritoVisibility',
  initialState,
  reducers: {
    setCarritoVisible(state, action: PayloadAction<boolean>) {
      state.isCarritoVisible = action.payload;
    },
    toggleCarritoVisibility(state) {
      state.isCarritoVisible = !state.isCarritoVisible;
    },
  },
});

export const { setCarritoVisible, toggleCarritoVisibility } = carritoVisibilitySlice.actions;
export default carritoVisibilitySlice.reducer;
