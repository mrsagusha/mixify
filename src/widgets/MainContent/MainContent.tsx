import type { ReactElement } from 'react';

import classes from './MainContent.module.scss';

const MainContent = (): ReactElement => {
  return <section className={classes.wrapper}></section>;
};

export { MainContent };
