'use client';

import { useEffect, useState, type FC, type PropsWithChildren, type ReactElement } from 'react';
import { useSearchParams } from 'next/navigation';

import { Header } from '@/widgets/Header/Header';
import { Footer } from '@/widgets/Footer/Footer';
import { CLIENT_ID, REDIRECT_URL } from '@/lib/constants/userAuthorization';
import { useActions } from '@/lib/hooks/useActions';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { logIn } from '@/app/store/auth/slice';
import { useGetUserTopItemsQuery } from '@/app/store/api/apiSlice';
import { Player } from '@/widgets/Player/Player';
import { SearchInput } from '@/features/SearchInput/SearchInput';
import { MainHeader } from '@/entities/MainHeader/MainHeader';
import { RecentlyPlayedTracks } from '@/widgets/RecentlyPlayedTracks/RecentlyPlayedTracks';
import { RecommendedPlaylists } from '@/widgets/RecommendedPlaylistst/RecommendedPlaylists';
import type { Artist } from '@/lib/types/api';
import { Sidebar } from '@/widgets/Sidebar/Sidebar';

import classes from './PageWrapper.module.scss';

const PageWrapper: FC<PropsWithChildren> = ({ children }): ReactElement => {
  const params = useSearchParams();

  const dispatch = useAppDispatch();

  const isUserAuthorized = useAppSelector((state) => state.auth.isAuthorized);
  const isSidebarVisible = useAppSelector((state) => state.sidebar.isSidebarVisible);
  const isUnderlayVisible = useAppSelector((state) => state.windows.isUnderlayVisible);

  const { userLogin } = useActions();

  const { data: topItems } = useGetUserTopItemsQuery(
    {
      type: 'artists',
      limit: 20,
      offset: 0,
      timeRange: 'medium_term',
    },
    {
      skip: !isUserAuthorized,
    }
  );

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
    <section className={classes.pageWrapper}>
      <Header />
      <section className={classes.wrapper}>
        <div className={classes.underlay}>
          {topItems && <Player image={topItems.items[0].images[0].url} name={topItems.items[0].name} />}
          <SearchInput className={classes.search} />
          <div className={`${classes.main} ${isUnderlayVisible ? classes.mainRolled : ''}`}>
            <MainHeader isUnderlayVisible={isUnderlayVisible} />
            <div className={classes.content}>
              <div className={classes.mainContent}>{children}</div>
              <div className={classes.sideContent}>
                <RecentlyPlayedTracks />
                <RecommendedPlaylists />
              </div>
            </div>
          </div>
          <Sidebar isSidebarVisible={isSidebarVisible} />
        </div>
      </section>
      <Footer />
    </section>
  );
};

export { PageWrapper };
