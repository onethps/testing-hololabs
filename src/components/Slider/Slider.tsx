import React, { FC } from 'react';

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';

import { useSwiperRef } from '../../hooks/useSwiperRef';

import styles from './Slider.module.scss';
import { SliderProps } from './Slider.Props';

export const Slider: FC<SliderProps> = ({ children }) => {
  const [previousSlideElement, previousSlideRef] = useSwiperRef<HTMLButtonElement>();
  const [nextSlideElement, nextSlideRef] = useSwiperRef<HTMLButtonElement>();

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
        modules={[Pagination, Navigation]}
      >
        {children}
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
