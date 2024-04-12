import { createSlice } from '@reduxjs/toolkit';

interface AuthInitialState {
  isUnderlayVisible: boolean;
}

const initialState: AuthInitialState = {
  isUnderlayVisible: false,
};

const underlaySlice = createSlice({
  name: 'underlay',
  initialState,
  reducers: {
    showUnderlay: (state): void => {
      state.isUnderlayVisible = true;
    },
    hideUnderlay: (state): void => {
      state.isUnderlayVisible = false;
    },
  },
});

export const { showUnderlay, hideUnderlay } = underlaySlice.actions;

export default underlaySlice.reducer;
