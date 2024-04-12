import type { ReactElement, FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { Input } from '@/shared/UI/Input/Input';

import classes from './SearchInput.module.scss';

interface SearchInputProps {
  className?: string;
}

const SearchInput: FC<SearchInputProps> = ({ className }): ReactElement => {
  return (
    <Input
      className={classNames(classes.input, className)}
      placeholder="Search"
      adornament={
        <Image className={classes.magnify} src="/icons/search/magnify.svg" width={24} height={24} alt="magnify" />
      }
    />
  );
};

export { SearchInput };
