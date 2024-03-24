import type { FC, PropsWithChildren, ReactElement } from 'react';
import { Header } from '@/widgets/Header/Header';
import { Footer } from '@/widgets/Footer/Footer';

import classes from './PageWrapper.module.scss';

const PageWrapper: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <section className={classes.wrapper}>
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export { PageWrapper };
