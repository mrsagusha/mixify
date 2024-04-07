import { type ReactElement, type FC, type MouseEvent, useState } from 'react';
import Image from 'next/image';

import { Button } from '@/shared/UI/Button/Button';

type ButtonVariation = 'contained' | 'containedNotActive' | 'texted' | 'iconDash' | 'underscore' | 'round' | 'box';
type ButtonType = 'button' | 'submit' | 'reset';

interface IconParams {
  folder: string;
  name: string;
}

interface IconButtonProps {
  iconParams: IconParams;
  iconWidth: number;
  iconHeight: number;
  iconName: string;
  variation: ButtonVariation;
  type: ButtonType;
  iconClassName?: string;
  buttonClassName?: string;
  withColorChanging?: boolean;
  onClick?(event?: MouseEvent<HTMLButtonElement>): void | Promise<void>;
}

const IconButton: FC<IconButtonProps> = ({
  iconClassName,
  buttonClassName,
  iconParams,
  iconWidth,
  iconHeight,
  iconName,
  type,
  variation,
  withColorChanging,
  onClick,
}): ReactElement => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const pathToIcon = '/icons/';

  const handleMouseEnter = (): void => {
    setIsHovered(true);
  };
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <Button
      className={buttonClassName}
      type={type}
      variation={variation}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        className={iconClassName}
        src={
          isHovered && withColorChanging
            ? `${pathToIcon}${iconParams.folder}/${iconParams.name}-light.svg`
            : `${pathToIcon}${iconParams.folder}/${iconParams.name}.svg`
        }
        width={iconWidth}
        height={iconHeight}
        alt={iconName}
      />
    </Button>
  );
};

export { IconButton };

('/icons/navigation/settings.svg');
