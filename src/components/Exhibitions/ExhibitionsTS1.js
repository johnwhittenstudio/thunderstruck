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
import ts1_01 from './../img/exhibitions/ts1/ts1_01.jpg'
import ts1_02 from './../img/exhibitions/ts1/ts1_02.jpg'
import ts1_03 from './../img/exhibitions/ts1/ts1_03.jpg'
import ts1_04 from './../img/exhibitions/ts1/ts1_04.jpg'
import ts1_05 from './../img/exhibitions/ts1/ts1_05.jpg'
import ts1_06 from './../img/exhibitions/ts1/ts1_06.jpg'
import ts1_07 from './../img/exhibitions/ts1/ts1_07.jpg'
import ts1_08 from './../img/exhibitions/ts1/ts1_08.jpg'
import ts1_09 from './../img/exhibitions/ts1/ts1_09.jpg'
import ts1_10 from './../img/exhibitions/ts1/ts1_10.jpg'
import ts1_11 from './../img/exhibitions/ts1/ts1_11.jpg'
import ts1_12 from './../img/exhibitions/ts1/ts1_12.jpg'
import ts1_13 from './../img/exhibitions/ts1/ts1_13.jpg'
import ts1_14 from './../img/exhibitions/ts1/ts1_14.jpg'
import ts1_15 from './../img/exhibitions/ts1/ts1_15.jpg'
import ts1_16 from './../img/exhibitions/ts1/ts1_16.jpg'
import ts1_17 from './../img/exhibitions/ts1/ts1_17.jpg'
import ts1_18 from './../img/exhibitions/ts1/ts1_18.jpg'
import ts1_19 from './../img/exhibitions/ts1/ts1_19.jpg'
import ts1_20 from './../img/exhibitions/ts1/ts1_20.jpg'


const Exhibitions = () => {

  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)
  const [setThumbsSwiper] = useState(null);

  return (
    <main> 
    <div className={classes.Exhibitions}>
      <div className={classes.HeaderContainer}><h2>Thunderstruck 1.0</h2></div>
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
            <img src={ts1_01} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_02} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_03} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_04} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_05} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_06} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_07} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_08} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_09} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_10} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_11} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_12} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_13} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_14} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_15} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_16} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_17} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_18} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_19} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_20} alt="" />
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
        <p style={{paddingTop: "2%", color: "grey"}}><em>Thunderstruck 1.0</em>, 2019, exhibition installation view at Carnation Contemporary in Portland, OR</p>
        <p style={{color: "grey"}}>photo credit: John Whitten </p>
      </div>
    </div>
    </main>
  );
}

export default Exhibitions;
