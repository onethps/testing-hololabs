import React from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.Props';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      {...props}
      className={`${variant === 'primary' ? styles.primary : styles.secondary}`}
    >
      {children}
    </button>
  );
};
