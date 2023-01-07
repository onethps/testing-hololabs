// import { MemberCard } from '../../components/MemberCard/MemberCard';
import { HeroMemberStats } from '../../components/HeroMemberStats/HeroMemberStats';
import { SearchInput } from '../../components/SearchInput/SearchInput';

import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.leftItem}>
            <img className={styles.heroTitle} alt="hero-title" src="./headline.svg" />
            <span className={styles.heroDescription}>
              The scale of the challenges facing our planet can seem daunting, but we can
              all do something.
            </span>
            <SearchInput />
          </div>
          <div className={styles.rightItem}>
            <HeroMemberStats />
          </div>
          {/* <div className={styles.memberImageStats}>
            <div className={styles.parrotStatsWrapper}>
              <img alt="parrot" src="./Parrot.svg" width="100%" />
              <MemberCard className={styles.memberCard} />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
