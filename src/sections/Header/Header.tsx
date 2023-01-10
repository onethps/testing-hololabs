import React from 'react';

import Hamburger from 'hamburger-react';
import { Link } from 'react-scroll';

import { Button } from '../../components/Button/Button';
import { Logo } from '../../components/Logo/Logo';

import styles from './Header.module.scss';
import { links } from './links.data';

export const Header = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo className={styles.logo} />
        {/* navigation */}
        <ul className={`${styles.linkBox} ${open ? styles.active : ''}`}>
          {links.map(link => (
            <li key={link.id}>
              <Link
                spy
                smooth
                to={link.href}
                className={styles.defaultLink}
                activeClass={styles.activeLink}
              >
                {link.title}
              </Link>
            </li>
          ))}
          <Button variant="secondary">Apply</Button>
        </ul>
        {/* mobile icon */}
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
