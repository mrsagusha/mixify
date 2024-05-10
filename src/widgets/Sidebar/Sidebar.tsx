'use client';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { type ReactElement, type FC, useEffect } from 'react';
import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { IconButton } from '@/shared/UI/IconButton/IconButton';
import { hideSidebar, setIsLoading } from '@/app/store/sidebar/slice';
import { Loader } from '@/shared/UI/Loader/Loader';
import { useGetArtistsAlbumsQuery, useGetArtistsTopTracksQuery } from '@/app/store/api/apiSlice';
import { TrackShort } from '@/entities/TrackShort/TrackShort';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import classes from './Sidebar.module.scss';

interface SidebarProps {
  isSidebarVisible: boolean;
}

const Sidebar: FC<SidebarProps> = ({ isSidebarVisible }): ReactElement => {
  const dispatch = useAppDispatch();

  const selectedItem = useAppSelector((state) => state.sidebar.selectedItem);
  const isItemLoading = useAppSelector((state) => state.sidebar.isItemLoading);

  const { data: topTracks, isLoading: areTracksLoading } = useGetArtistsTopTracksQuery(selectedItem?.id);
  const { data: albums, isLoading: areAlbumsLoading } = useGetArtistsAlbumsQuery({
    id: topTracks?.tracks[0].artists[0].id,
    limit: 50,
    offset: 0,
    include_groups: 'album',
  });

  console.log(albums);

  useEffect(() => {
    if (!areTracksLoading) {
      dispatch(setIsLoading(false));
    }
  }, [areTracksLoading]);

  const renderContent = (): ReactElement => {
    if (areTracksLoading || isItemLoading || areAlbumsLoading || !selectedItem) {
      return <Loader />;
    }

    return (
      <div className={classes.content}>
        <div className={classes.header}>
          <Image
            className={classes.image}
            src={selectedItem?.images[0].url}
            width={150}
            height={150}
            alt={selectedItem?.name}
          />
          <div className={classes.information}>
            <p className={classes.type}>{selectedItem?.type}</p>
            <p className={classes.name}>{selectedItem?.name}</p>
            <p className={classes.genre}>{selectedItem?.genres[0]}</p>
            <IconButton
              buttonClassName={classes.play}
              type="button"
              variation="texted"
              iconHeight={50}
              iconWidth={50}
              iconName="play-purple"
              iconParams={{ folder: 'wave', name: 'play-purple' }}
            />
          </div>
        </div>
        <div className={classes.topTracks}>
          {topTracks?.tracks.slice(0, 5).map(({ name, duration_ms, artists, album }, index: number) => (
            <TrackShort key={index} album={album} name={name} artists={artists} index={index} duration={duration_ms} />
          ))}
        </div>
        <div>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className={classes.swiper}
          >
            {albums?.items.map(({ images, name, release_date }) => {
              return (
                <SwiperSlide className={classes.slide}>
                  <div>
                    <img src={images[0].url} alt="" />
                    <p>{name}</p>
                    <p>{release_date}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    );
  };

  return (
    <div className={`${classes.wrapper} ${isSidebarVisible ? classes.shown : ''}`}>
      <IconButton
        buttonClassName={classes.close}
        type="button"
        variation="texted"
        iconHeight={24}
        iconWidth={24}
        iconName="close"
        iconParams={{ folder: 'shared', name: 'close' }}
        onClick={() => dispatch(hideSidebar())}
      />
      {renderContent()}
    </div>
  );
};

export { Sidebar };
