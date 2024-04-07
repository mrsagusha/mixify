import { configureStore, type Middleware } from '@reduxjs/toolkit';
import authReducer from '@/app/store/auth/slice';
import underlayReducer from '@/app/store/underlay/slice';
import { mixifyApi } from './api/apiSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      underlay: underlayReducer,
      auth: authReducer,
      [mixifyApi.reducerPath]: mixifyApi.reducer,
    },
    middleware: (getDefaultMiddleware): Middleware[] =>
      getDefaultMiddleware().concat([mixifyApi.middleware]) as Middleware[],
  });
};

const store = makeStore();

type AppStore = ReturnType<typeof makeStore>;
type RootState = ReturnType<AppStore['getState']>;
type AppDispatch = AppStore['dispatch'];

export { store, type AppStore, type RootState, type AppDispatch };
