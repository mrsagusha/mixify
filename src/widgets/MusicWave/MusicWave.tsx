import type { ReactElement } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { TOP_ROW_ICONS, MIDDLE_ROW_ICONS, BOTTOM_ROW_ICONS } from '@/widgets/MusicWave/model/constants';

import classes from './MusicWave.module.scss';

const MusicWave = (): ReactElement => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.layer}></div>
      <div className={classNames(classes.row, classes.sideRow)}>
        {TOP_ROW_ICONS.map(({ id, src, width, height, alt }) => (
          <Image key={id} src={src} width={width} height={height} alt={alt} />
        ))}
      </div>
      <div className={classes.row}>
        {MIDDLE_ROW_ICONS.map(({ id, src, width, height, alt }) => (
          <Image key={id} src={src} width={width} height={height} alt={alt} />
        ))}
      </div>
      <div className={classNames(classes.row, classes.sideRow)}>
        {BOTTOM_ROW_ICONS.map(({ id, src, width, height, alt }) => (
          <Image key={id} src={src} width={width} height={height} alt={alt} />
        ))}
      </div>
    </section>
  );
};

export { MusicWave };
