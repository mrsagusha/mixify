import type { ReactElement, InputHTMLAttributes, FC, ReactNode } from 'react';

import classNames from 'classnames';

import classes from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  name?: string;
  label?: string;
  adornament?: ReactNode;
}

const Input: FC<InputProps> = ({ className, name, label, adornament, ...props }): ReactElement => {
  return (
    <div className={classNames(classes.wrapper, className)}>
      {adornament}
      <label htmlFor={name}>{label}</label>
      <input className={classes.input} id={name} {...props} />
    </div>
  );
};

export { Input };
