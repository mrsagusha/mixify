import { createSlice } from '@reduxjs/toolkit';
import { userLogin } from '@/app/store/auth/actions';

interface AuthInitialState {
  isUnderlayVisible: boolean;
}

const initialState: AuthInitialState = {
  isUnderlayVisible: true,
};

const underlaySlice = createSlice({
  name: 'auth',
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
