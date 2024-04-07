import type { ReactElement, FC } from 'react';
import Image from 'next/image';

import { IconButton } from '@/shared/UI/IconButton/IconButton';

import classes from './Player.module.scss';
import classNames from 'classnames';

interface PlayerProps {
  image: string;
  name: string;
}

const Player: FC<PlayerProps> = ({ image, name }): ReactElement => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <Image className={classes.image} src={image} width={150} height={150} alt={name} />
      </div>
      <div className={classes.player}>
        <div className={classes.track}>
          <p className={classes.name}>Resistance</p>
          <p className={classes.artist}>Muse</p>
          <p></p>
        </div>
        <div className={classes.controls}>
          <IconButton
            buttonClassName={classes.button}
            type="button"
            variation="texted"
            iconHeight={20}
            iconWidth={20}
            iconName="repeat"
            iconParams={{ folder: 'wave', name: 'repeat' }}
          />
          <div className={classes.mainControls}>
            <IconButton
              buttonClassName={classes.button}
              type="button"
              variation="texted"
              iconHeight={30}
              iconWidth={30}
              iconName="previous"
              iconParams={{ folder: 'wave', name: 'previous' }}
            />
            <IconButton
              buttonClassName={classes.playButton}
              iconClassName={classes.play}
              type="button"
              variation="texted"
              iconHeight={50}
              iconWidth={50}
              iconName="play"
              iconParams={{ folder: 'wave', name: 'play' }}
            />
            <IconButton
              buttonClassName={classes.button}
              type="button"
              variation="texted"
              iconHeight={30}
              iconWidth={30}
              iconName="next"
              iconParams={{ folder: 'wave', name: 'next' }}
            />
          </div>
          <IconButton
            type="button"
            variation="texted"
            iconHeight={20}
            iconWidth={20}
            iconName="shuffle"
            iconParams={{ folder: 'wave', name: 'shuffle' }}
          />
        </div>
      </div>
      <div className={classes.progressBar}></div>
    </div>
  );
};

export { Player };
