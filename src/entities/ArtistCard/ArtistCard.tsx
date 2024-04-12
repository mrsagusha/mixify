'use client';

import { type ReactElement, type FC, useEffect, useState } from 'react';
import { FastAverageColor } from 'fast-average-color';

import { ImageType } from '@/lib/types/image';
import { IconButton } from '@/shared/UI/IconButton/IconButton';
import { ICON_HEIGHT, ICON_WIDTH } from '@/widgets/Header/model/constants';

import classes from './ArtistCard.module.scss';

interface ArtistCardProps {
  image: ImageType;
  name: string;
  id: string;
  getArtist(id: string): Promise<void>;
}

const ArtistCard: FC<ArtistCardProps> = ({ image, name, id, getArtist }): ReactElement => {
  const [averageColor, setAverageColor] = useState<string | null>(null);

  useEffect(() => {
    const fac = new FastAverageColor();

    fac
      .getColorAsync(image.url)
      .then(({ rgba }) => setAverageColor(rgba.replace(/(rgba?\([^,]+,[^,]+,[^,]+,)(1)(\))/, '$10.5$3')));
  }, [image]);

  return (
    <div className={classes.wrapper} style={{ backgroundImage: `url(${image.url})` }} onClick={() => getArtist(id)}>
      {averageColor && (
        <div className={classes.details} style={{ backgroundColor: averageColor }}>
          <div className={classes.info}>
            <p className={classes.name}>{name}</p>
            <p className={classes.note}>Artist</p>
          </div>
          <IconButton
            buttonClassName={classes.play}
            iconClassName={classes.playIcon}
            type="button"
            variation="texted"
            iconHeight={ICON_HEIGHT}
            iconWidth={ICON_WIDTH}
            iconName="play"
            iconParams={{ folder: 'wave', name: 'play' }}
          />
        </div>
      )}
    </div>
  );
};

export { ArtistCard };
