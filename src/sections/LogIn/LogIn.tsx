import React from 'react';

import leavesImage from '../../assets/leaves.svg';
import { Button } from '../../components/Button/Button';

import styles from './LogIn.module.scss';

export const LogIn = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        {/* left item */}
        <div className={styles.leftItem}>
          <h3 className={styles.title}>Get started today!</h3>
          <p className={styles.text}>
            Learn more about how you can save our planets nature. From smart consumption
            to switching to renewable energy, each of us can do our part to save the
            planet.
          </p>
        </div>
        {/* right item */}
        <div className={styles.rightItem}>
          <div className={styles.box}>
            <img alt={leavesImage} src={leavesImage} />
            <h3 className={styles.title}>Log In</h3>
            <input placeholder="Name" />
            <input placeholder="Email" />
            <Button variant="primary">Book a demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
