import type { ReactElement } from 'react';

import { useGetFeaturedPlaylistsQuery } from '@/app/store/api/apiSlice';

import classes from './RecommendedPlaylists.module.scss';
import { Playlist } from '@/entities/Playlist/Playlist';

const RecommendedPlaylists = (): ReactElement => {
  const { data: playlists } = useGetFeaturedPlaylistsQuery({ limit: 10 });

  console.log(playlists);

  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>Featured playlists</p>
      <div className={classes.playlists}>
        {playlists?.playlists.items.map(({ id, name, description, images }): ReactElement => {
          return <Playlist key={id} name={name} description={description} images={images} />;
        })}
      </div>
    </div>
  );
};

export { RecommendedPlaylists };
