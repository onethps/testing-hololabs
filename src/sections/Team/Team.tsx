import React from 'react';

import styles from './Team.module.scss';

export const Team = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Our Top Team</h1>
          <p className={styles.description}>
            Learn more about how you can save our planets nature.
          </p>
        </div>
        <div className={styles.userImages}>
          <img alt="user_img" src="./user1.jpg" />
          <img alt="user_img" src="./user2.jpg" />
          <img alt="user_img" src="./user3.jpg" />
        </div>
      </div>
    </section>
  );
};
