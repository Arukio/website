import { FC, MouseEvent } from 'react';

import s from './Button.module.css';

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  handleClick?: (event: MouseEvent) => unknown | undefined;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className={s.button} type="button">
      {children}
    </button>
  );
};

export default Button;
