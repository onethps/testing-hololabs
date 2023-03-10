/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';

import styles from './Team.module.scss';

export const Team = () => {
  return (
    // eslint-disable-next-line prettier/prettier
    <section id={'team'} className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Our Top Team</h1>
          <p className={styles.description}>
            Learn more about how you can save our planets nature.
          </p>
        </div>

        <div className={styles.userImages}>
          <img className={styles.user} alt="user_img" src="./user1.jpg" />
          <img className={styles.user} alt="user_img" src="./user2.jpg" />
          <img className={styles.user} alt="user_img" src="./user3.jpg" />
        </div>
      </div>
    </section>
  );
};
