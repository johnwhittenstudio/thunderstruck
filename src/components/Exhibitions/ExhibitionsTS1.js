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
import ts1_03 from './../img/exhibitions/ts1/ts1_03.jpg'
import ts1_06 from './../img/exhibitions/ts1/ts1_06.jpg'
import ts1_07 from './../img/exhibitions/ts1/ts1_07.jpg'
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
import ts1_20 from './../img/exhibitions/ts1/ts1_20.jpg'
import ts1_21 from './../img/exhibitions/ts1/ts1_21.jpg'
import ts1_22 from './../img/exhibitions/ts1/ts1_22.jpg'
import ts1_23 from './../img/exhibitions/ts1/ts1_23.jpg'
import ts1_24 from './../img/exhibitions/ts1/ts1_24.jpg'
import ts1_25 from './../img/exhibitions/ts1/ts1_25.jpg'
import ts1_26 from './../img/exhibitions/ts1/ts1_26.jpg'


const Exhibitions = () => {

  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)
  const [setThumbsSwiper] = useState(null);

  return (
    <main> 
    <div className={classes.Exhibitions}>
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
            <img src={ts1_01} alt="" />
            <p style={{color: "grey"}}>works depicted left to right by Katherine Spinella, Jessi DiTillio, Rosana Aviña-Beam, Michael E. Stephen, Robert Collier Beam</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_03} alt="" />
          <p>detail of&nbsp;<em>The Serpent and the Rainbow</em>&nbsp;by Michael E. Stephen</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_06} alt="" />
          <p>detail of&nbsp;<em>The Serpent and the Rainbow</em>&nbsp;by Michael E. Stephen</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_07} alt="" />
          <p>works depicted left to right by Katherine Spinella, Jessi DiTillio, Rosana Aviña-Beam, Robert Collier Beam</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_09} alt="" />
          <p>detail of&nbsp;<em>Walking the Perimeter</em>&nbsp;by Katherine Spinella</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_10} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_11} alt="" />
          <p>works depicted by John Whitten (left) and Michael E. Stephen (right)</p>
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
          <img src={ts1_20} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_21} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_22} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_23} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_24} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_25} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts1_26} alt="" />
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
        <p style={{paddingTop: "2%", color: "grey"}}><em>Thunderstruck 2.0: black hole sun</em>, 2021, exhibition installation view at Carnation Contemporary in Portland, OR</p>
        <p style={{color: "grey"}}>photo credit: John Whitten © 2022 </p>
      </div>
    </div>
    </main>
  );
}

export default Exhibitions;
