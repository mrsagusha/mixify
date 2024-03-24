import { createSlice } from '@reduxjs/toolkit';
import { userLogin } from '@/app/store/auth/actions';

interface AuthInitialState {
  isAuthorized: boolean;
  isLoading: boolean;
  error?: string;
}

const initialState: AuthInitialState = {
  isAuthorized: false,
  isLoading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSmth: (): void => {},
  },
  extraReducers: ({ addCase }): void => {
    addCase(userLogin.pending, (state): void => {
      state.isLoading = true;
      state.error = '';
    });
    addCase(userLogin.fulfilled, (state): void => {
      state.isLoading = false;
      state.isAuthorized = true;
    });
    addCase(userLogin.rejected, (state, action): void => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setSmth } = authSlice.actions;

export default authSlice.reducer;