import React, { useState } from 'react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Thumbs, Pagination } from 'swiper'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs'
import classes from './Trips.module.css'
import tst_01 from './../img/trips/ut/tst_01.jpg'
import tst_02 from './../img/trips/ut/tst_02.jpg'
import tst_03 from './../img/trips/ut/tst_03.jpg'
import tst_04 from './../img/trips/ut/tst_04.jpg'
import tst_05 from './../img/trips/ut/tst_05.jpg'
import tst_06 from './../img/trips/ut/tst_06.jpg'
import tst_07 from './../img/trips/ut/tst_07.jpg'
import tst_08 from './../img/trips/ut/tst_08.jpg'
import tst_09 from './../img/trips/ut/tst_09.jpg'
import tst_10 from './../img/trips/ut/tst_10.jpg'
import tst_11 from './../img/trips/ut/tst_11.jpg'


const Trips = () => {

  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)
  const [setThumbsSwiper] = useState(null);

  return (
    <main> 
    <div className={classes.Trips}>
      <div className={classes.HeaderContainer}><h2>Utah (2020 - 2021)</h2></div>
      <Swiper 
        modules={[Thumbs, Navigation, Pagination]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        navigation
        pagination={{ clickable: true }}
        effect
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
            <img src={tst_01} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={tst_02} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={tst_03} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={tst_04} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={tst_06} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={tst_05} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={tst_08} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={tst_07} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={tst_11} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={tst_09} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={tst_10} alt="" />
        </SwiperSlide>
      
        <div className={classes.SwiperNavPrev} ref={swiperNavPrevRef}></div>
        <div className={classes.SwiperNavNext} ref={swiperNavNextRef}></div>
      
      </Swiper>
      <Swiper
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
        />
      <div className={classes.TripsText}>
        <p style={{color: "grey"}}>photo credit: John Whitten </p>
      </div>
    </div>
    </main>
  );
}

export default Trips;