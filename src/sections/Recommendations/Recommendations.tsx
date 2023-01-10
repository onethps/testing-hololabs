import React from 'react';

import { SwiperSlide } from 'swiper/react';

import { Slider } from '../../components/Slider/Slider';
import { sliderContent } from '../../data/slider.data';
import { slideStyles } from '../../data/slideStyle.data';

import styles from './Recommendations.module.scss';

export const Recommendations = () => {
  return (
    <section id="recommendations" className={styles.root}>
      <Slider>
        {sliderContent.map(slide => {
          const getRandomCardStyle = Math.floor(Math.random() * slideStyles.length);

          return (
            <SwiperSlide key={slide.id} className={styles.slide}>
              {({ isActive }) => (
                <div className={`${styles.activeSlide} ${isActive ? styles.zoom : ''}`}>
                  {isActive ? (
                    <>
                      <img
                        style={{
                          borderRadius: slideStyles[getRandomCardStyle].borderRadius,
                        }}
                        alt="label-img"
                        className={`${styles.labelImg} ${
                          isActive ? styles.animateImageActiveLabel : ''
                        }`}
                        src={slide.img}
                      />

                      <div className={styles.contentCard}>
                        <span className={styles.title}>{slide.title}</span>
                        <p className={styles.description}>{slide.description}</p>
                      </div>
                      <div />
                    </>
                  ) : (
                    <div className={styles.imageBox}>
                      <img
                        style={{
                          borderRadius: slideStyles[getRandomCardStyle].borderRadius,
                        }}
                        alt="label-img"
                        className={`${styles.labelImg} ${
                          isActive ? styles.animateImageActiveLabel : styles.defaultImage
                        }`}
                        src={slide.img}
                      />
                      {!isActive && (
                        <span className={styles.labelTitle}>{slide.title}</span>
                      )}
                    </div>
                  )}
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Slider>
    </section>
  );
};
