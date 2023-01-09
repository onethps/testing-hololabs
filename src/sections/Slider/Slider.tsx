import React from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useSwiperRef } from '../../hooks/useSwiperRef';

// import ReactBG from '../../assets/slider_bg1.svg';

import styles from './Slider.module.scss';

// Import Swiper styles

export const Slider = () => {
  const [previousSlideElement, previousSlideRef] = useSwiperRef<HTMLButtonElement>();
  const [nextSlideElement, nextSlideRef] = useSwiperRef<HTMLButtonElement>();

  const sliderContent = [
    {
      id: 1,
      title: 'Save Water',
      description:
        'Taking on the issue of ensuring access to safe water requires worldwide effort.',
      img: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
      id: 2,
      title: 'Plant trees',
      description:
        'Taking on the issue of ensuring access to safe water requires worldwide effort.',
      img: 'https://images.unsplash.com/photo-1534054477014-696beafcf028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
    },
    {
      id: 3,
      title: 'Choose organic',
      description:
        'Taking on the issue of ensuring access to safe water requires worldwide effort.',
      img: 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      id: 4,
      title: 'Avoid plastic',
      description:
        'Taking on the issue of ensuring access to safe water requires worldwide effort.',
      img: 'https://images.unsplash.com/photo-1558640476-437a2b9438a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1342&q=80',
    },
    {
      id: 5,
      title: 'Save energy',
      description:
        'Taking on the issue of ensuring access to safe water requires worldwide effort.',
      img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
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
        spaceBetween={0}
        slidesPerView="auto"
        centeredSlides
        navigation={{
          prevEl: previousSlideElement,
          nextEl: nextSlideElement,
        }}
        pagination={{
          el: '.swiper-custom-pagination',
          type: 'fraction',
        }}
        modules={[Keyboard, Pagination, Navigation]}
        breakpoints={{}}
      >
        {sliderContent.map(slide => {
          const getRandomCardStyle = Math.floor(Math.random() * randomCardStyle.length);

          return (
            <SwiperSlide key={slide.id} className={styles.slide}>
              {({ isActive }) => (
                <div className={`${styles.activeSlide} ${isActive ? styles.zoom : ''}`}>
                  <img
                    style={{
                      borderRadius: randomCardStyle[getRandomCardStyle].borderRadius,
                    }}
                    alt="label-img"
                    className={`${styles.labelImg} ${
                      isActive ? styles.animateImageActiveLabel : styles.defaultImage
                    }`}
                    src={slide.img}
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
      <div className={styles.sliderControl}>
        <span ref={previousSlideRef} className={styles.leftArrow} />

        <div className={styles.pagination}>
          <div className="swiper-custom-pagination" />
        </div>
        <span ref={nextSlideRef} className={styles.rightArrow} />
      </div>
    </div>
  );
};
