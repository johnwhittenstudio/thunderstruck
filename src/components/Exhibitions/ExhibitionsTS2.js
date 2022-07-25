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
import classes from './Exhibitions.module.css'
import ts2_01 from './../img/exhibitions/ts2/ts2_01.jpg'
import ts2_02 from './../img/exhibitions/ts2/ts2_02.jpg'
import ts2_03 from './../img/exhibitions/ts2/ts2_03.jpg'
import ts2_04 from './../img/exhibitions/ts2/ts2_04.jpg'
import ts2_05 from './../img/exhibitions/ts2/ts2_05.jpg'
import ts2_06 from './../img/exhibitions/ts2/ts2_06.jpg'
import ts2_08 from './../img/exhibitions/ts2/ts2_08.jpg'
import ts2_09 from './../img/exhibitions/ts2/ts2_09.jpg'
import ts2_10 from './../img/exhibitions/ts2/ts2_10.jpg'
import ts2_11 from './../img/exhibitions/ts2/ts2_11.jpg'


const Exhibitions = () => {

  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)
  const [setThumbsSwiper] = useState(null);

  return (
    <main> 
    <div className={classes.Exhibition}>
      <div className={classes.HeaderContainer}><h2>Thunderstruck 2.0: black hole sun</h2></div>
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
            <img src={ts2_01} alt="" />
          <p>works depicted left to right by Kristin Hough, Jessi DiTillio, John Whitten, Katherine Spinella, Michael E. Stephen, and Morgan Rosskopf</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_02} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_03} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_04} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_05} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_06} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_08} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_09} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_10} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_11} alt="" />
        </SwiperSlide>
      


      
        <div className={classes.SwiperNavPrev} ref={swiperNavPrevRef}></div>
        <div className={classes.SwiperNavNext} ref={swiperNavNextRef}></div>
      
      </Swiper>
      <Swiper
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
        />
      <div className={classes.ExhibitionText}>
        <p style={{paddingTop: "1%"}}>Thunderstruck 2.0: black hole sun, 2021, exhibition installation view at Carnation Contemporary in Portland, OR</p>
        <p >photo credit: John Whitten </p>
      </div>
    </div>
    </main>
  );
}

export default Exhibitions;
