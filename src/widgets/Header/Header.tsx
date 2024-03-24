import type { ReactElement } from 'react';

import classes from './Header.module.scss';
import { Logo } from '@/entities/Logo/Logo';

const Header = (): ReactElement => {
  return (
    <header className={classes.wrapper}>
      <Logo />
    </header>
  );
};

export { Header };
