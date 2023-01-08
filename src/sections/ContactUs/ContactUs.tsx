import React from 'react';

import minus from '../../assets/minus.svg';
import plus from '../../assets/plus.svg';
import { Button } from '../../components/Button/Button';
import { Collapse } from '../../components/Collapse/Collapse';

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

  const faqText = [
    {
      id: '1',
      title: 'What can I do to protect our planet?',
      text: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
    },
    {
      id: '2',
      title: 'How to save nature ecology?',
      text: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
    },
  ];

  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Ready to Get started?</h3>
        <p className={styles.description}>
          When pattern is mentioned in interior design, it is easy to asso- ciate it with
          a geometric patterned wallpaper or colourful prints on interior fabrics.
        </p>
        <Button variant="primary" className={styles.contactButton}>
          Contact us
        </Button>

        <div className={styles.faqBox}>
          {faqText.map(({ title, id, text }) => {
            return (
              <div className={styles.faqItem} key={id}>
                <button type="button" onClick={() => handleClick(id)}>
                  <div className={styles.headerButton}>
                    <span>{title}</span>
                    <div className={styles.buttonWrapper}>
                      {openId === id ? (
                        <img alt="minus" className={styles.minus} src={minus} />
                      ) : (
                        <img alt="plus" className={styles.plus} src={plus} />
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
