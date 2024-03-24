import type { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import classes from './UserIcon.module.scss';

const UserIcon = (): ReactElement => {
  return (
    <div className={classes.wrapper}>
      <Link className={classes.link} href="/">
        <Image src="/test.png" width={30} height={30} alt="user" />
      </Link>
    </div>
  );
};

export { UserIcon };
