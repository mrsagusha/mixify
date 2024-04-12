'use client';

import type { ReactElement, FC } from 'react';
import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { IconButton } from '@/shared/UI/IconButton/IconButton';
import { hideSidebar } from '@/app/store/sidebar/slice';
import { ICON_HEIGHT, ICON_WIDTH } from '../Header/model/constants';

import classes from './Sidebar.module.scss';

interface SidebarProps {
  isSidebarVisible: boolean;
}

const Sidebar: FC<SidebarProps> = ({ isSidebarVisible }): ReactElement => {
  const dispatch = useAppDispatch();

  const selectedItem = useAppSelector((state) => state.sidebar.selectedItem);
  const isLoading = useAppSelector((state) => state.sidebar.isItemLoading);

  return (
    <div className={`${classes.wrapper} ${isSidebarVisible ? classes.shown : ''}`}>
      <IconButton
        buttonClassName={classes.close}
        type="button"
        variation="texted"
        iconHeight={24}
        iconWidth={24}
        iconName="close"
        iconParams={{ folder: 'shared', name: 'close' }}
        onClick={() => dispatch(hideSidebar())}
      />
      <div className={classes.header}>
        <Image
          className={classes.image}
          src={selectedItem?.images[0].url}
          width={150}
          height={150}
          alt={selectedItem?.name}
        />
        <div className={classes.information}>
          <p className={classes.type}>{selectedItem?.type}</p>
          <p className={classes.name}>{selectedItem?.name}</p>
          <p className={classes.genre}>{selectedItem?.genres[0]}</p>
          <IconButton
            buttonClassName={classes.play}
            type="button"
            variation="texted"
            iconHeight={50}
            iconWidth={50}
            iconName="play-purple"
            iconParams={{ folder: 'wave', name: 'play-purple' }}
          />
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
