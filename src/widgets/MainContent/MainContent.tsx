'use client';

import type { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { MainHeader } from '@/entities/MainHeader/MainHeader';
import { useGetUserTopItemsQuery } from '@/app/store/api/apiSlice';
import { RecentlyPlayedTracks } from '@/widgets/RecentlyPlayedTracks/RecentlyPlayedTracks';
import { Player } from '@/widgets/Player/Player';
import { RecommendedPlaylists } from '@/widgets/RecommendedPlaylistst/RecommendedPlaylists';

import classes from './MainContent.module.scss';

const MainContent = (): ReactElement => {
  const isUserAuthorized = useAppSelector((state) => state.auth.isAuthorized);
  const isUnderlayVisible = useAppSelector((state) => state.underlay.isUnderlayVisible);

  const { data: topItems, isLoading } = useGetUserTopItemsQuery(
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

  return (
    <section className={classes.wrapper}>
      <div className={classes.underlay}>
        <Player image={topItems?.items[0].images[0].url} />
        <div className={`${classes.main} ${isUnderlayVisible ? classes.mainRolled : ''}`}>
          <MainHeader isUnderlayVisible={isUnderlayVisible} />
          <div className={classes.content}>
            <div className={classes.test1}>
              <div className={classes.display}>
                <Swiper
                  direction={'vertical'}
                  pagination={{ dynamicBullets: true }}
                  modules={[Autoplay, Pagination]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  speed={1000}
                  className={classes.swiper}
                >
                  {topItems?.items.map(({ images, name, id }) => {
                    return (
                      <SwiperSlide className={classes.slide} key={id}>
                        <div className={classes.slideContent} style={{ backgroundImage: `url(${images[0].url})` }}>
                          <div className={classes.buttomContent}>
                            <p className={classes.name}>{name}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
            <div className={classes.sideContent}>
              <RecentlyPlayedTracks />
              <RecommendedPlaylists />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { MainContent };
