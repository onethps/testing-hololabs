import React from 'react';

import { ReactComponent as MinusButton } from '../../assets/minus.svg';
import { ReactComponent as PlusButton } from '../../assets/plus.svg';
import { Button } from '../../components/Button/Button';
import { Collapse } from '../../components/Collapse/Collapse';
import { faqText } from '../../data/faq.data';

import styles from './ContactUs.module.scss';

export const ContactUs = () => {
  const [openId, setOpenId] = React.useState<string | null>(null);

  const handleClick = (id: string): void => {
    if (openId === id) {
      setOpenId(null);

      return;
    }

    setOpenId(id);
  };

  return (
    <section id="contact" className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.leftItem}>
          <h3 className={styles.title}>Ready to Get started?</h3>
          <p className={styles.description}>
            When pattern is mentioned in interior design, it is easy to associate it with
            a geometric patterned wallpaper or colourful prints on interior fabrics.
          </p>
          <Button variant="primary" className={styles.contactButton}>
            Contact us
          </Button>
        </div>

        <div className={styles.faqBox}>
          {faqText.map(({ title, id, text }) => {
            return (
              <div className={styles.faqItem} key={id}>
                <button type="button" onClick={() => handleClick(id)}>
                  <div className={styles.headerButton}>
                    <span>{title}</span>
                    <div className={styles.buttonWrapper}>
                      {openId === id ? (
                        <MinusButton className={styles.minus} />
                      ) : (
                        <PlusButton className={styles.plus} />
                      )}
                    </div>
                  </div>
                </button>
                <Collapse open={openId === id}>
                  <p className={styles.collapseText}>{text}</p>
                </Collapse>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
