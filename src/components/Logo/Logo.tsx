import React from 'react';

import styles from './Logo.module.scss';
import { LogoProps } from './Logo.Props';

export const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <div {...props} className={`${className} ${styles.root} `}>
      <img width={38} height={38} alt="logo" src="./logo.svg" />
      <h1>Rootz</h1>
    </div>
  );
};
