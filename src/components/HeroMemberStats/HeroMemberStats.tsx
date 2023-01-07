import React from 'react';

import styles from './HeroMemberStats.module.scss';
import { HeroMemberStatsProps } from './HeroMemberStats.Props';

export const HeroMemberStats: React.FC<HeroMemberStatsProps> = ({
  className,
  ...props
}) => {
  return (
    <div {...props} className={`${className} ${styles.root}`}>
      <div className={styles.parrot}>
        <img className={styles.parrotImage} alt="parrot" src="./Parrot.svg" />
        <img className={styles.cardImage} alt="card" src="./card.svg" />
      </div>
    </div>
  );
};
