import React from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import ReactBG from '../../assets/slider_bg1.svg';

import styles from './Slider.module.scss';

// Import Swiper styles

export const Slider = () => {
  const sliderContent = [
    {
      id: 1,
      title: 'Save Weather',
      description:
        'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    },
    {
      id: 2,
      title: 'Plant trees',
      description:
        'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    },
    {
      id: 3,
      title: 'Choose organic',
      description:
        'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    },
    {
      id: 4,
      title: 'Avoid plastic',
      description:
        'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    },
    {
      id: 5,
      title: 'Save energy',
      description:
        'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    },
  ];

  const randomCardStyle = [
    { id: 1, borderRadius: '13% 87% 37% 63% / 57% 38% 62% 43%' },
    { id: 2, borderRadius: '47% 53% 37% 63% / 55% 23% 77% 45%' },
    { id: 3, borderRadius: '21% 79% 39% 61% / 42% 51% 49% 58%' },
    { id: 4, borderRadius: '60% 40% 39% 61% / 30% 77% 23% 70% ' },
  ];

  return (
    <div className={styles.root}>
      <Swiper
        className={styles.swiper}
        initialSlide={3}
        loop
        slidesPerView={3}
        spaceBetween={0}
        centeredSlides
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Keyboard, Pagination, Navigation]}
      >
        {sliderContent.map(slide => {
          const getRandom = Math.floor(Math.random() * randomCardStyle.length);

          return (
            <SwiperSlide key={slide.id} className={styles.slide}>
              {({ isActive }) => (
                <div className={`${styles.activeSlide} ${isActive ? styles.zoom : ''}`}>
                  <img
                    style={{
                      borderRadius: randomCardStyle[getRandom].borderRadius,
                    }}
                    alt="label-img"
                    className={`${styles.labelImg} ${
                      isActive ? styles.animateImageActiveLabel : styles.defaultImage
                    }`}
                    src="https://images.unsplash.com/photo-1566804310514-706a618720c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                  />
                  {isActive ? (
                    <div className={styles.contentCard}>
                      <span className={styles.title}>{slide.title}</span>
                      <p className={styles.description}>{slide.description}</p>
                    </div>
                  ) : null}
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
