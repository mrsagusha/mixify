import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';

import * as authActions from '@/app/store/auth/actions';
import { useAppDispatch } from '@/app/store/hooks';

type StoreActions = typeof authActions;

const useActions = (): StoreActions => {
  const dispatch = useAppDispatch();

  return useMemo((): StoreActions => {
    const combinedActions: StoreActions = {
      ...authActions,
    };

    return bindActionCreators(combinedActions, dispatch);
  }, [dispatch]);
};

export { useActions };
