import { MusicWave } from '@/widgets/MusicWave/MusicWave';
import type { ReactElement } from 'react';
import classes from './page.module.scss';

export default function Page(): ReactElement {
  return (
    <section className={classes.wrapper}>
      <MusicWave />
    </section>
  );
}
