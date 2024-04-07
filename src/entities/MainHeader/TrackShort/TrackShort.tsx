import type { ReactElement, FC } from 'react';
import Image from 'next/image';

import { Button } from '@/shared/UI/Button/Button';
import { Album, Artist, ItemType } from '@/lib/types/api';

import classes from './TrackShort.module.scss';

interface TrackShortProps {
  id: string;
  name: string;
  artists: Artist[];
  album: Album;
}

const TrackShort: FC<TrackShortProps> = ({ id, album: { images }, name, artists }): ReactElement => {
  return (
    <div className={classes.wrapper} key={id}>
      <div className={classes.trackWrapper}>
        <div className={classes.imageWrapper}>
          <Image src={images[0].url} layout="fill" alt={name} />
          <Image className={classes.play} src="/icons/wave/play.svg" width={35} height={35} alt="play" />
        </div>
        <div className={classes.trackInfo}>
          <p className={classes.track}>{name}</p>
          <p className={classes.artist}>{artists[0].name}</p>
        </div>
      </div>
      <Button className={classes.button} type="button" variation="texted">
        ...
      </Button>
    </div>
  );
};

export { TrackShort };
