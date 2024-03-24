import type { ReactElement } from 'react';

import { Logo } from '@/entities/Logo/Logo';
import { UserIcon } from '@/entities/UserIcon/UserIcon';
import { useAppSelector } from '@/app/store/hooks';
import { Button } from '@/shared/UI/Button/Button';
import { redirectToCodeFlow } from '@/lib/utils/redirectToCodeFlow';
import { CLIENT_ID, REDIRECT_URL } from '@/lib/constants/userAuthorization';
import { Input } from '@/shared/UI/Input/Input';

import classes from './Header.module.scss';

const Header = (): ReactElement => {
  const isUserAuthorized = useAppSelector((state) => state.auth.isAuthorized);

  const handleClick = (): void => {
    redirectToCodeFlow(CLIENT_ID, REDIRECT_URL);
  };

  return (
    <header className={classes.wrapper}>
      <div className={classes.searchWrapper}>
        <Logo />
        <Input placeholder="Search artists, tracks, albums and playlists..." />
      </div>
      {isUserAuthorized ? (
        <UserIcon />
      ) : (
        <Button variation="round" type="button" onClick={handleClick}>
          Log in
        </Button>
      )}
    </header>
  );
};

export { Header };
