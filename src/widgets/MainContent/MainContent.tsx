'use client';

import { useEffect, type ReactElement } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { mixifyApi, useGetRelatedArtistsQuery, useGetUserTopItemsQuery } from '@/app/store/api/apiSlice';
import { Display } from '@/widgets/Display/Display';
import { ArtistCard } from '@/entities/ArtistCard/ArtistCard';
import { ItemsSection } from '@/entities/ItemsSection/ItemsSection';
import { setIsLoading, setSelectedItem, showSidebar } from '@/app/store/sidebar/slice';

import classes from './MainContent.module.scss';

const MainContent = (): ReactElement => {
  const isUserAuthorized = useAppSelector((state) => state.auth.isAuthorized);

  const dispatch = useAppDispatch();

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

  const { data: relatedArtists } = useGetRelatedArtistsQuery(topItems?.items[0].id);

  const [getArtist, { data, isLoading }] = mixifyApi.endpoints.getArtist.useLazyQuery();

  const handleGetArtist = async (id: string): Promise<void> => {
    dispatch(showSidebar());
    dispatch(setIsLoading());

    await getArtist(id);
  };

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setSelectedItem(data));
    }
  }, [isLoading]);

  return (
    <>
      <Display items={topItems} />
      <div className={classes.sectionsWrapper}>
        <ItemsSection title={`Similar to: ${topItems?.items[0].name}`}>
          {relatedArtists?.artists.map(({ name, images, id }) => {
            return <ArtistCard image={images[0]} name={name} id={id} getArtist={handleGetArtist} />;
          })}
        </ItemsSection>
      </div>
    </>
  );
};

export { MainContent };
