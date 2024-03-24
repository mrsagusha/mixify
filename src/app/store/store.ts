import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/app/store/auth/slice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
    },
  });
};

type AppStore = ReturnType<typeof makeStore>;
type RootState = ReturnType<AppStore['getState']>;
type AppDispatch = AppStore['dispatch'];

export type { AppStore, RootState, AppDispatch };
