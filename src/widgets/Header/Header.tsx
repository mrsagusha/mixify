'use client';

import type { ReactElement } from 'react';
import Image from 'next/image';

import { useAppSelector } from '@/app/store/hooks';
import { redirectToCodeFlow } from '@/lib/utils/redirectToCodeFlow';
import { CLIENT_ID, REDIRECT_URL } from '@/lib/constants/userAuthorization';
import { useGetUserProfileQuery } from '@/app/store/api/apiSlice';
import { Button } from '@/shared/UI/Button/Button';
import { ICON_HEIGHT, ICON_WIDTH, MAIN_NAVIGATION_ICONS } from '@/widgets/Header/model/constants';
import classNames from 'classnames';
import { IconButton } from '@/shared/UI/IconButton/IconButton';

import classes from './Header.module.scss';

const Header = (): ReactElement => {
  const isUserAuthorized = useAppSelector((state) => state.auth.isAuthorized);

  const { data: user } = useGetUserProfileQuery(undefined, {
    skip: !isUserAuthorized,
  });

  const handleClick = (): void => {
    redirectToCodeFlow(CLIENT_ID, REDIRECT_URL);
  };

  const renderIcon = (): ReactElement => {
    if (isUserAuthorized && user) {
      return (
        <Image className={classes.userImage} src={user.images[0].url} width={45} height={45} alt={user.display_name} />
      );
    }

    return (
      <Button type="button" className={classes.button} onClick={handleClick} variation="texted">
        Log in
      </Button>
    );
  };

  return (
    <header className={classes.wrapper}>
      {renderIcon()}
      <div className={classes.mainIcons}>
        {MAIN_NAVIGATION_ICONS.map(({ id, name }) => {
          return (
            <IconButton
              buttonClassName={classes.button}
              key={id}
              type="button"
              variation="texted"
              iconHeight={ICON_HEIGHT}
              iconWidth={ICON_WIDTH}
              iconName={name}
              iconParams={{ folder: 'navigation', name }}
              withColorChanging
            />
          );
        })}
      </div>
      <IconButton
        buttonClassName={classNames(classes.button, classes.settings)}
        type="button"
        variation="texted"
        iconHeight={ICON_HEIGHT}
        iconWidth={ICON_WIDTH}
        iconName="settings"
        iconParams={{ folder: 'navigation', name: 'settings' }}
        withColorChanging
      />
    </header>
  );
};

export { Header };
