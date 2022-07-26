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
import tlf_01 from './../img/trips/nm/tlf_01.jpg'
// import tlf_02 from './../img/trips/nm/tlf_02.jpg'
import tlf_03 from './../img/trips/nm/tlf_03.jpg'
import tlf_04 from './../img/trips/nm/tlf_04.jpg'
import vla_01 from './../img/trips/nm/vla_01.jpg'
import vla_02 from './../img/trips/nm/vla_02.jpg'


const Trips = () => {

  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)
  const [setThumbsSwiper] = useState(null);

  return (
    <main> 
    <div className={classes.Trip}>
      <div className={classes.HeaderContainer}><h2>New Mexico (2018 - 2019)</h2></div>
      
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
            <img src={tlf_01} alt="" />
            <div className={classes.TripsText}>
            <p >photo credit: John Whitten </p>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className={classes.swiperSlide}>
            <img src={tlf_02} alt="" />
          </SwiperSlide> */}
          <SwiperSlide className={classes.swiperSlide}>
            <img src={tlf_03} alt="" />
            <div className={classes.TripsText}>
              <p >photo credit: John Whitten </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.swiperSlide}>
            <img src={tlf_04} alt="" />
            <div className={classes.TripsText}>
            <p >photo credit: John Whitten </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.swiperSlide}>
            <img src={vla_01} alt="" />
            <div className={classes.TripsText}>
            <p >photo credit: John Whitten </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.swiperSlide}>
            <img src={vla_02} alt="" />
            <div className={classes.TripsText}>
            <p >photo credit: John Whitten </p>
            </div>
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
        <p style={{paddingTop: "1%"}}>photo credit: John Whitten </p>
      </div>
    </div>
    </main>
  );
}

export default Trips;