import React, { useState } from 'react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade, Thumbs, Pagination } from 'swiper'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs'
import classes from './Exhibitions.module.css'
import exhibition01 from './../img/exhibitions/exhibition01.jpg'
import exhibition02 from './../img/exhibitions/exhibition02.jpg'
import exhibition03 from './../img/exhibitions/exhibition03.jpg'
import exhibition04 from './../img/exhibitions/exhibition04.jpg'


const Exhibitions = () => {

  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)
  const [setThumbsSwiper] = useState(null);
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return ( 
    <div className={classes.Exhibitions}>
      <div className={classes.HeaderContainer}><h2>see our shows</h2></div>
      <Swiper 
        modules={[Thumbs, Navigation, EffectFade, Pagination]}
        // thumbs={{ swiper: thumbsSwiper }}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        navigation
        pagination={{ clickable: true }}
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
        <div className={classes.SwiperNavPrev} ref={swiperNavPrevRef}></div>
        <div className={classes.SwiperNavNext} ref={swiperNavNextRef}></div>
      </Swiper>
      <div className={classes.ExhibitionText}>
        <h4><em>Thunderstruck 2.0: black hole sun</em>, 2021, exhibition installation view at Carnation Contemporary in Portland, OR</h4>
      </div>

    </div>
  );
}

export default Exhibitions;

