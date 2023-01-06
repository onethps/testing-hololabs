import React from 'react';

import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={styles.root}>
      <img width={38} height={38} alt="logo" src="./logo.svg" />
      <h1>Rootz</h1>
    </div>
  );
};
