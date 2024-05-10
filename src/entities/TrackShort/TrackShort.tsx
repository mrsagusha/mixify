import type { ReactElement, FC } from 'react';
import Image from 'next/image';

import { Button } from '@/shared/UI/Button/Button';
import { Album, Artist, ItemType } from '@/lib/types/api';

import classes from './TrackShort.module.scss';
import { getTrackDuration } from '@/lib/utils/getTrackDuration';
import { formatTrackDuration } from '@/lib/utils/formatTrackDurations';

interface TrackShortProps {
  name: string;
  artists: Artist[];
  album: Album;
  index?: number;
  duration?: number;
}

const TrackShort: FC<TrackShortProps> = ({ album: { images }, name, artists, index, duration }): ReactElement => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.trackWrapper}>
        {index !== undefined && <p className={classes.index}>{index + 1}</p>}
        <div className={classes.imageWrapper}>
          <Image src={images[0].url} layout="fill" alt={name} />
          <Image className={classes.play} src="/icons/wave/play.svg" width={35} height={35} alt="play" />
        </div>
        <div className={classes.trackInfo}>
          <p className={classes.track}>{name}</p>
          <p className={classes.artist}>{artists[0].name}</p>
        </div>
      </div>
      <div className={classes.end}>
        {duration && <p className={classes.duration}>{formatTrackDuration(getTrackDuration(duration))}</p>}
        <Button className={classes.button} type="button" variation="texted">
          ...
        </Button>
      </div>
    </div>
  );
};

export { TrackShort };
