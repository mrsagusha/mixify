import type { ReactElement, InputHTMLAttributes, FC } from 'react';

import classes from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
}

const Input: FC<InputProps> = ({ name, label, ...props }): ReactElement => {
  return (
    <div className={classes.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input className={classes.input} id={name} {...props} />
      <img className={classes.adornment} src="/icons/search/magnify.svg"></img>
    </div>
  );
};

export { Input };
