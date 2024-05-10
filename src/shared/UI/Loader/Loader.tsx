import type { ReactElement } from 'react';

import classes from './Loader.module.scss';

const Loader = (): ReactElement => {
  return <div className={classes.loader}></div>;
};

export { Loader };
