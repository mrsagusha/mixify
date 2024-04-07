import type { ReactElement } from 'react';

import { Button } from '@/shared/UI/Button/Button';
import { useGetUserRecentlyPlayedTrancksQuery } from '@/app/store/api/apiSlice';
import { TrackShort } from '@/entities/MainHeader/TrackShort/TrackShort';

import classes from './RecentlyPlayedTracks.module.scss';

const RecentlyPlayedTracks = (): ReactElement => {
  const { data } = useGetUserRecentlyPlayedTrancksQuery({ limit: 4, after: 0 });

  return (
    <div>
      <div className={classes.header}>
        <p>Recently played</p>
        <Button className={classes.button} type="button" variation="underscore">
          See all
        </Button>
      </div>
      <div className={classes.tracksWrapper}>
        {data?.items.map(({ track: { name, album, artists, id } }) => {
          return <TrackShort name={name} album={album} artists={artists} id={id} />;
        })}
      </div>
    </div>
  );
};

export { RecentlyPlayedTracks };
