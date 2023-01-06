import React from 'react';

import { Logo } from '../../components/Logo/Logo';
import { Navigation } from '../../components/Navigation/Navigation';

import styles from './Hero.module.scss';

export const Hero = () => {
  //   const a = false;

  return (
    <section className={styles.root}>
      <header className={styles.header}>
        <Logo />
        <Navigation />
      </header>
    </section>
  );
};
