'use client';

import type { ReactElement } from 'react';

import { useGetFeaturedPlaylistsQuery } from '@/app/store/api/apiSlice';
import { Playlist } from '@/entities/Playlist/Playlist';
import { Button } from '@/shared/UI/Button/Button';

import classes from './RecommendedPlaylists.module.scss';

const RecommendedPlaylists = (): ReactElement => {
  const { data: playlists } = useGetFeaturedPlaylistsQuery({ limit: 12 });

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <p className={classes.title}>Featured playlists</p>
        <Button className={classes.button} type="button" variation="underscore">
          See all
        </Button>
      </div>
      <div className={classes.playlists}>
        {playlists?.playlists.items.map(({ id, name, description, images }): ReactElement => {
          return <Playlist key={id} name={name} description={description} images={images} />;
        })}
      </div>
    </div>
  );
};

export { RecommendedPlaylists };
