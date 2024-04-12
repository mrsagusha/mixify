'use client';

import type { ReactElement, FC } from 'react';
import Image from 'next/image';

import type { ImageType } from '@/lib/types/image';
import { makeFirstLetterCapital } from '@/lib/utils/makeFirstLetterCapital';

import classes from './Playlist.module.scss';

interface PlaylistProps {
  name: string;
  description: string;
  images: ImageType[];
}

const Playlist: FC<PlaylistProps> = ({ images, name, description }): ReactElement => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imgeWrapper}>
        <Image src={images[0].url} layout="fill" alt={name} />
      </div>
      <p className={classes.name}>{makeFirstLetterCapital(name)}</p>
      <p>
        {makeFirstLetterCapital(description)
          .replace(/<a\b[^>]*>(.*?)<\/a>/g, '')
          .replace(/.*?\.(?=.*?<)/g, '')
          .replace(/(\.)([^\.]*)$/g, '')}
      </p>
    </div>
  );
};

export { Playlist };
