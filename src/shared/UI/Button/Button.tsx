import type { ReactElement, ReactNode, MouseEvent, FC } from 'react';
import classNames from 'classnames';

import classes from './Button.module.scss';

type ButtonVariation = 'contained' | 'containedNotActive' | 'texted' | 'underscore' | 'round' | 'box';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  variation: ButtonVariation;
  type: ButtonType;
  children: ReactNode | string;
  name?: string;
  isDisabled?: boolean;
  onClick?(event?: MouseEvent<HTMLButtonElement>): void | Promise<void>;
  onMouseEnter?(event?: MouseEvent<HTMLButtonElement>): void;
  onMouseLeave?(event?: MouseEvent<HTMLButtonElement>): void;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  variation,
  type,
  name,
  isDisabled,
  className,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
}): ReactElement => {
  return (
    <button
      className={classNames(classes.button, classes[variation], className)}
      type={type}
      onClick={onClick}
      name={name}
      disabled={isDisabled}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export { Button };
