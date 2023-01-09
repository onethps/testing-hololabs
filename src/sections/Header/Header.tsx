import React from 'react';

import Hamburger from 'hamburger-react';

import { Button } from '../../components/Button/Button';
import { Logo } from '../../components/Logo/Logo';
// import { Navigation } from '../../components/Navigation/Navigation';

import styles from './Header.module.scss';

export const Header = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const links = [
    {
      id: 1,
      title: 'Home',
      href: '/',
      active: true,
    },
    {
      id: 2,
      title: 'Our mission',
      href: '/',
      active: false,
    },
    {
      id: 3,
      title: 'Places',
      href: '/',
      active: false,
    },
    {
      id: 4,
      title: 'Team',
      href: '/',
      active: false,
    },
  ];

  React.useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.removeAttribute('style');

    return () => {
      document.body.removeAttribute('style');
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo className={styles.logo} />
        {/* <Navigation className={styles.navigation} /> */}

        <nav className={`${styles.linkBox} ${open ? styles.active : ''}`}>
          {links.map(link => (
            <a href={link.href} key={link.id}>
              {link.title}
            </a>
          ))}
          <Button variant="secondary">Apply</Button>
        </nav>
        {/* <BurgerIcon /> */}
        <button
          type="button"
          className={styles.burgerIcon}
          onClick={() => setOpen(!open)}
        >
          <Hamburger />
        </button>

        <Button className={styles.navButton} variant="secondary">
          Apply
        </Button>
      </div>
    </header>
  );
};
