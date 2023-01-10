import React from 'react';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h1>CONTACTS</h1>
        <div className={styles.content}>
          <p>2019 Rootz Foundation.</p>
          <p>All rights reserved</p>
        </div>
      </div>
      <div className={styles.header}>
        <h2>Headquarters</h2>
        <div className={styles.content}>
          <address>1234 Taliban</address>
          <address>Los Angeles, La 1234567</address>
          <p>(123) 456-7890</p>
        </div>
      </div>
      <div className={styles.header}>
        <h2>Social media</h2>
        <div className={styles.content}>
          <ul className={styles.socialMedia}>
            <li>
              <img alt="social-icon" src="./twitter.svg" />
            </li>
            <li>
              <img alt="social-icon" src="./facebook.svg" />
            </li>
            <li>
              <img alt="social-icon" src="./linkedIn.svg" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
