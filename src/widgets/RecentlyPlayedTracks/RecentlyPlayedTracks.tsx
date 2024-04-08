import type { ReactElement } from 'react';

import { Button } from '@/shared/UI/Button/Button';
import { useGetUserRecentlyPlayedTrancksQuery } from '@/app/store/api/apiSlice';
import { TrackShort } from '@/entities/TrackShort/TrackShort';

import classes from './RecentlyPlayedTracks.module.scss';

const RecentlyPlayedTracks = (): ReactElement => {
  const { data } = useGetUserRecentlyPlayedTrancksQuery({ limit: 4, after: 0 });

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <p>Recently played</p>
        <Button className={classes.button} type="button" variation="underscore">
          See all
        </Button>
      </div>
      <div className={classes.tracksWrapper}>
        {data?.items.map(({ track: { name, album, artists, id } }) => {
          return <TrackShort name={name} album={album} artists={artists} key={id} />;
        })}
      </div>
    </div>
  );
};

export { RecentlyPlayedTracks };
