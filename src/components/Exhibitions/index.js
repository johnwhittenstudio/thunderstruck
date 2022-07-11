import React from "react";
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import classes from './Exhibitions.module.css'
import exhibition01 from './../img/exhibitions/exhibition01.jpg'
import exhibition02 from './../img/exhibitions/exhibition02.jpg'
import exhibition03 from './../img/exhibitions/exhibition03.jpg'
import exhibition04 from './../img/exhibitions/exhibition04.jpg'
import leftarrow from './../img/carousel/arrow_left.png'
import rightarrow from './../img/carousel/arrow_right.png'

const Exhibitions = () => {

  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)

  return ( 
    <div className={classes.Exhibitions}>
      <Swiper 
        modules={[Navigation, EffectFade]}
        navigation
        effect
        // effect={'fade'}
        speed={800}
        slidesPerView={1}
        loop
        className={classes.mySwiper}

        onInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          swiper.params.navigation.nextEl = swiperNavNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <SwiperSlide className={classes.swiperSlide}>
          <div className={classes.img}>
            <img src={exhibition01} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
        <img src={exhibition02} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
        <img src={exhibition03} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
        <img src={exhibition04} alt="" />
        </SwiperSlide>
        <div className={classes.swiperNavPrev} ref={swiperNavPrevRef}></div>
        <div className={classes.swiperNavNext} ref={swiperNavNextRef}></div>
      </Swiper>
    </div>
  );
}

export default Exhibitions;

