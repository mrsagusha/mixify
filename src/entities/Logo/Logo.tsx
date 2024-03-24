import Link from 'next/link';
import type { ReactElement } from 'react';

import classes from './Logo.module.scss';

const Logo = (): ReactElement => {
  return (
    <Link className={classes.logo} href="/">
      MIXIFY
    </Link>
  );
};

export { Logo };
