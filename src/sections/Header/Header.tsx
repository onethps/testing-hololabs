import React from 'react';

import BurgerIcon from '../../assets/burger.svg';
import { Button } from '../../components/Button/Button';
import { Logo } from '../../components/Logo/Logo';
import { Navigation } from '../../components/Navigation/Navigation';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo className={styles.logo} />
        <Navigation className={styles.navigation} />
        <Button variant="secondary">Apply</Button>
        <img alt="burger" className={styles.burgerIcon} src={BurgerIcon} />
      </div>
    </header>
  );
};
