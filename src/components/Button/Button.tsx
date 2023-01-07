import React from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.Props';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  const buttonCustomStyle = variant === 'primary' ? styles.primary : styles.secondary;

  return (
    <button
      type="button"
      {...props}
      className={`${styles.buttonBase} ${buttonCustomStyle} ${className}`}
    >
      {children}
    </button>
  );
};
