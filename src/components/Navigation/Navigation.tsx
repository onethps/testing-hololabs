import React from 'react';

import styles from './Navigation.module.scss';
import { NavigationProps } from './Navigation.Props';

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

export const Navigation: React.FC<NavigationProps> = ({ className, ...props }) => {
  return (
    <nav {...props} className={`${styles.root} ${className}`}>
      {links.map(link => (
        <a href={link.href} key={link.id}>
          {link.title}
        </a>
      ))}
    </nav>
  );
};
