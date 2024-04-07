'use client';

import { Provider } from 'react-redux';

import { store } from '@/app/store/store';

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };
