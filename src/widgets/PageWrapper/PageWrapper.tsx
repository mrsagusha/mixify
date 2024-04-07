'use client';

import { useEffect, type FC, type PropsWithChildren, type ReactElement } from 'react';
import { useSearchParams } from 'next/navigation';

import { Header } from '@/widgets/Header/Header';
import { Footer } from '@/widgets/Footer/Footer';
import { CLIENT_ID, REDIRECT_URL } from '@/lib/constants/userAuthorization';
import { useActions } from '@/lib/hooks/useActions';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { logIn } from '@/app/store/auth/slice';

import classes from './PageWrapper.module.scss';

const PageWrapper: FC<PropsWithChildren> = ({ children }): ReactElement => {
  const params = useSearchParams();

  const dispatch = useAppDispatch();

  const isUserAuthorized = useAppSelector((state) => state.auth.isAuthorized);

  const { userLogin } = useActions();

  const code = params.get('code') as string;
  const verifier = window.localStorage.getItem('code_verifier') as string;

  const requestParams = {
    code,
    clientId: CLIENT_ID,
    codeVerifier: verifier,
    redirectUrl: REDIRECT_URL,
  };

  useEffect(() => {
    if (code) {
      userLogin(requestParams);
    }
  }, [code]);

  useEffect(() => {
    dispatch(logIn());
  }, [isUserAuthorized]);

  return (
    <section className={classes.wrapper}>
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export { PageWrapper };
