import type { FC, ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { UserTopItems } from '@/lib/types/api';

import classes from './Display.module.scss';

interface DisplayProps {
  items?: UserTopItems;
}

const Display: FC<DisplayProps> = ({ items }): ReactElement => {
  return (
    <div className={classes.display}>
      <Swiper
        direction={'vertical'}
        pagination={{ dynamicBullets: true }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        className={classes.swiper}
      >
        {items?.items.map(({ images, name, id }) => {
          return (
            <SwiperSlide className={classes.slide} key={id}>
              <div className={classes.slideContent} style={{ backgroundImage: `url(${images[0].url})` }}>
                <div className={classes.buttomContent}>
                  <p className={classes.name}>{name}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export { Display };
