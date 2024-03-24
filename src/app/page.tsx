import type { ReactElement } from 'react';

import { MusicWave } from '@/widgets/MusicWave/MusicWave';
import { MainContent } from '@/widgets/MainContent/MainContent';

import classes from './page.module.scss';

export default function Page(): ReactElement {
  return (
    <section className={classes.wrapper}>
      <MusicWave />
      <MainContent />
    </section>
  );
}
