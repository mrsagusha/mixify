import type { ReactElement, FC, ReactNode } from 'react';

import { Button } from '@/shared/UI/Button/Button';

import classes from './ItemsSection.module.scss';

interface ItemsSectionProps {
  title: string;
  children: ReactNode;
}

const ItemsSection: FC<ItemsSectionProps> = ({ title, children }): ReactElement => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <p className={classes.title}>{title}</p>
        <Button className={classes.button} type="button" variation="underscore">
          See all
        </Button>
      </div>
      <div className={classes.itemsWrapper}>{children}</div>
    </div>
  );
};

export { ItemsSection };
