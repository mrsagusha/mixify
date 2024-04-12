import type { ReactElement, FC } from 'react';

import { hideUnderlay, showUnderlay } from '@/app/store/underlay/slice';
import { useAppDispatch } from '@/app/store/hooks';
import { Button } from '@/shared/UI/Button/Button';
import { SearchInput } from '@/features/SearchInput/SearchInput';

import classes from './MainHeader.module.scss';

interface MainHeaderProps {
  isUnderlayVisible: boolean;
}

const MainHeader: FC<MainHeaderProps> = ({ isUnderlayVisible }): ReactElement => {
  const dispatch = useAppDispatch();

  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Home</h1>
      <Button
        type="button"
        variation="texted"
        onClick={() => dispatch(isUnderlayVisible ? hideUnderlay() : showUnderlay())}
      >
        click
      </Button>
    </div>
  );
};

export { MainHeader };
