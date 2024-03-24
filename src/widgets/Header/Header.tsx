import type { ReactElement } from 'react';

import classes from './Header.module.scss';
import { Logo } from '@/entities/Logo/Logo';
import { UserIcon } from '@/entities/UserIcon/UserIcon';

const Header = (): ReactElement => {
  return (
    <header className={classes.wrapper}>
      <Logo />
      <UserIcon />
    </header>
  );
};

export { Header };
