import type { ReactElement } from 'react';
import Image from 'next/image';

import { Input } from '@/shared/UI/Input/Input';

import classes from './SearchInput.module.scss';

const SearchInput = (): ReactElement => {
  return (
    <Input
      className={classes.input}
      placeholder="Search"
      adornament={
        <Image className={classes.magnify} src="/icons/search/magnify.svg" width={24} height={24} alt="magnify" />
      }
    />
  );
};

export { SearchInput };
