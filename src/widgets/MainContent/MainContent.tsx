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
  const dispatch = useAppDispatch();

  const isUserAuthorized = useAppSelector((state) => state.auth.isAuthorized);
  const selectedItem = useAppSelector((state) => state.sidebar.selectedItem);

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

  const [getArtist, { data }] = mixifyApi.endpoints.getArtist.useLazyQuery();

  const handleGetArtist = async (id: string): Promise<void> => {
    dispatch(showSidebar());

    if (selectedItem?.id !== id) {
      dispatch(setIsLoading(true));

      await getArtist(id);
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(setSelectedItem(data));
    }
  }, [data]);

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
