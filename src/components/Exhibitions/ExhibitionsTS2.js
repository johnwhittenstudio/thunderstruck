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
import ts2_12 from './../img/exhibitions/ts2/ts2_12.jpg'
import ts2_13 from './../img/exhibitions/ts2/ts2_13.jpg'
import ts2_14 from './../img/exhibitions/ts2/ts2_14.jpg'
import ts2_15 from './../img/exhibitions/ts2/ts2_15.jpg'
import ts2_16 from './../img/exhibitions/ts2/ts2_16.jpg'
import ts2_17 from './../img/exhibitions/ts2/ts2_17.jpg'
import ts2_18 from './../img/exhibitions/ts2/ts2_18.jpg'
import ts2_19 from './../img/exhibitions/ts2/ts2_19.jpg'
import ts2_20 from './../img/exhibitions/ts2/ts2_20.jpg'
import ts2_21 from './../img/exhibitions/ts2/ts2_21.jpg'
import ts2_22 from './../img/exhibitions/ts2/ts2_22.jpg'
import ts2_23 from './../img/exhibitions/ts2/ts2_23.jpg'
import ts2_24 from './../img/exhibitions/ts2/ts2_24.jpg'
import ts2_27 from './../img/exhibitions/ts2/ts2_27.jpg'
import ts2_28 from './../img/exhibitions/ts2/ts2_28.jpg'
import ts2_29 from './../img/exhibitions/ts2/ts2_29.jpg'
import ts2_30 from './../img/exhibitions/ts2/ts2_30.jpg'
import ts2_31 from './../img/exhibitions/ts2/ts2_31.jpg'
import ts2_32 from './../img/exhibitions/ts2/ts2_32.jpg'
import ts2_33 from './../img/exhibitions/ts2/ts2_33.jpg'
import ts2_34 from './../img/exhibitions/ts2/ts2_34.jpg'
import ts2_35 from './../img/exhibitions/ts2/ts2_35.jpg'
import ts2_36 from './../img/exhibitions/ts2/ts2_36.jpg'
import ts2_37 from './../img/exhibitions/ts2/ts2_37.jpg'
import ts2_38 from './../img/exhibitions/ts2/ts2_38.jpg'
import ts2_39 from './../img/exhibitions/ts2/ts2_39.jpg'
import ts2_40 from './../img/exhibitions/ts2/ts2_40.jpg'
import ts2_41 from './../img/exhibitions/ts2/ts2_41.jpg'
import ts2_42 from './../img/exhibitions/ts2/ts2_42.jpg'
import ts2_43 from './../img/exhibitions/ts2/ts2_43.jpg'
import ts2_44 from './../img/exhibitions/ts2/ts2_44.jpg'
import ts2_45 from './../img/exhibitions/ts2/ts2_45.jpg'
import ts2_46 from './../img/exhibitions/ts2/ts2_46.jpg'
import ts2_47 from './../img/exhibitions/ts2/ts2_47.jpg'
import ts2_48 from './../img/exhibitions/ts2/ts2_48.jpg'
import ts2_49 from './../img/exhibitions/ts2/ts2_49.jpg'
import ts2_50 from './../img/exhibitions/ts2/ts2_50.jpg'
import ts2_51 from './../img/exhibitions/ts2/ts2_51.jpg'


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
          <p>works depicted left to right by Michael E. Stephen, Jessi DiTillio, Morgan Rosskopf, John Whitten, and Katherine Spinella</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_03} alt="" />
          <p>works depicted left to right by John Whitten, Katherine Spinella, Jessi DiTillio, and Michael E. Stephen</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_04} alt="" />
          <p>works depicted left to right by John Whitten, Katherine Spinella, Jessi DiTillio, and Michael E. Stephen</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_05} alt="" />
          <p>Death Spiral, by Michael E. Stephen, Pulverized rocks from the Spiral Jetty, Great Salt Lake salt & dirt collected from the Sun Tunnels, cast into Monster in my Pocket™️ Reaper collectibles, 48 x 48 in. 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_06} alt="" />
          <p>Death Spiral (detail), by Michael E. Stephen, Pulverized rocks from the Spiral Jetty, Great Salt Lake salt & dirt collected from the Sun Tunnels, cast into Monster in my Pocket™️ Reaper collectibles, 48 x 48 in. 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <a href="https://www.youtube.com/watch?v=xSSyWCnXYGs"><img src={ts2_08} alt="" /></a>
          <p>Little Pigeon, by Katherine Spinella & John Whitten, Clay, HD video on tablet with sound
          14 x 12 x 6 in. 2021 (Click image to view on YouTube)</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
        <a href="https://www.youtube.com/watch?v=xSSyWCnXYGs"><img src={ts2_09} alt="" /></a>
        <p>Little Pigeon, by Katherine Spinella & John Whitten, Clay, HD video on tablet with sound
          14 x 12 x 6 in. 2021 (Click image to view on YouTube)</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
        <a href="https://www.youtube.com/watch?v=xSSyWCnXYGs"><img src={ts2_10} alt="" /></a>
        <p>Little Pigeon, by Katherine Spinella & John Whitten, Clay, HD video on tablet with sound
          14 x 12 x 6 in. 2021 (Click image to view on YouTube)</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_11} alt="" />
          <p>Mooning Nancy, by John Whitten, Katherine Spinella, Jessi DiTillio, & Michael Stephen, HD video & Spellcasting salt, Dimensions variable, 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_12} alt="" />
          <p>Mooning Nancy (detail), by John Whitten, Katherine Spinella, Jessi DiTillio, & Michael Stephen, Spellcasting salt, Dimensions variable, 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_13} alt="" />
          <p>Perseus, by John Whitten, Graphite pencil on black paper, 23 x 30 in. 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_14} alt="" />
          <p>Perseus (detail), by John Whitten, Graphite pencil on black paper, 23 x 30 in. 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_15} alt="" />
          <p> Everything Louder Than Everything Else (left), by Morgan Rosskopf, Mixed media on hand-cut paper & duralar, 22 x 30 in. 2021 &nbsp;///&nbsp; Tarot Reading (right), by John Whitten, Graphite pencil on black paper, 23 x 30 in. 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_16} alt="" />
          <p>Tarot Reading, by John Whitten, Graphite pencil on black paper, 23 x 30 in. 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_17} alt="" />
          <p>Tarot Reading (detail), by John Whitten, Graphite pencil on black paper, 23 x 30 in. 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_18} alt="" />
          <p>Tarot Reading (detail), by John Whitten, Graphite pencil on black paper, 23 x 30 in. 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_19} alt="" />
          <p>Tarot Reading (detail), by John Whitten, Graphite pencil on black paper, 23 x 30 in. 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_20} alt="" />
          <p>Everything Louder Than Everything Else, by Morgan Rosskopf, Mixed media on hand-cut paper & duralar, 22 x 30 in. 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_21} alt="" />
          <p>Everything Louder Than Everything Else (dtail), by Morgan Rosskopf, Mixed media on hand-cut paper & duralar, 22 x 30 in. 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_22} alt="" />
          <p>Everything Louder Than Everything Else (dtail), by Morgan Rosskopf, Mixed media on hand-cut paper & duralar, 22 x 30 in. 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_23} alt="" />
          <p>Everything Louder Than Everything Else (dtail), by Morgan Rosskopf, Mixed media on hand-cut paper & duralar, 22 x 30 in. 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_24} alt="" />
          
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_27} alt="" />
          <p>Your Moon In My Sky (left) & Sand That Moves / Strong Will-ed (right), by Morgan Rosskopf, Mixed media on hand cut paper & duralar, 17 x 21 in., 2021 &nbsp;///&nbsp; Backscatter (projected), by Ashlin Aronin, Magnetometer, accelerometer, PyBadge, Raspberry Pi, Unity, Max for Live, sound, light, Dimensions variable, 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_28} alt="" />
          <p>Sand That Moves / Strong Will-ed, by Morgan Rosskopf, Mixed media on hand cut paper & duralar, 17 x 21 in., 2021 &nbsp;///&nbsp; Backscatter (projected), by Ashlin Aronin, Magnetometer, accelerometer, PyBadge, Raspberry Pi, Unity, Max for Live, sound, light, Dimensions variable, 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_29} alt="" />
          <p>Sand That Moves / Strong Will-ed (detail), by Morgan Rosskopf, Mixed media on hand cut paper & duralar, 17 x 21 in., 2021 &nbsp;///&nbsp; Backscatter (projected), by Ashlin Aronin, Magnetometer, accelerometer, PyBadge, Raspberry Pi, Unity, Max for Live, sound, light, Dimensions variable, 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_30} alt="" />
          <p>Sand That Moves / Strong Will-ed (detail), by Morgan Rosskopf, Mixed media on hand cut paper & duralar, 17 x 21 in., 2021 &nbsp;///&nbsp; Backscatter (projected), by Ashlin Aronin, Magnetometer, accelerometer, PyBadge, Raspberry Pi, Unity, Max for Live, sound, light, Dimensions variable, 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_31} alt="" />
          <p>Sand That Moves / Strong Will-ed (detail), by Morgan Rosskopf, Mixed media on hand cut paper & duralar, 17 x 21 in., 2021 &nbsp;///&nbsp; Backscatter (projected), by Ashlin Aronin, Magnetometer, accelerometer, PyBadge, Raspberry Pi, Unity, Max for Live, sound, light, Dimensions variable, 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_32} alt="" />
          <p>Your Moon In My Sky, by Morgan Rosskopf, Mixed media on hand cut paper & duralar, 17 x 21 in., 2021 &nbsp;///&nbsp; Backscatter (projected), by Ashlin Aronin, Magnetometer, accelerometer, PyBadge, Raspberry Pi, Unity, Max for Live, sound, light, Dimensions variable, 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_33} alt="" />
          <p>Your Moon In My Sky, by Morgan Rosskopf, Mixed media on hand cut paper & duralar, 17 x 21 in., 2021 &nbsp;///&nbsp; Backscatter (projected), by Ashlin Aronin, Magnetometer, accelerometer, PyBadge, Raspberry Pi, Unity, Max for Live, sound, light, Dimensions variable, 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_34} alt="" />
          <p>Your Moon In My Sky (detail), by Morgan Rosskopf, Mixed media on hand cut paper & duralar, 17 x 21 in., 2021 &nbsp;///&nbsp; Backscatter (projected), by Ashlin Aronin, Magnetometer, accelerometer, PyBadge, Raspberry Pi, Unity, Max for Live, sound, light, Dimensions variable, 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_35} alt="" />
          <p>Your Moon In My Sky (detail), by Morgan Rosskopf, Mixed media on hand cut paper & duralar, 17 x 21 in., 2021 &nbsp;///&nbsp; Backscatter (projected), by Ashlin Aronin, Magnetometer, accelerometer, PyBadge, Raspberry Pi, Unity, Max for Live, sound, light, Dimensions variable, 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_36} alt="" />
          <p>Shine (left), by Michael Stephen, Altered Kenner Care Bear plush (1983) & light therapy lamp looped on time intervals (18 sec. - ON / 21 min. - OFF) Dimensions variable, 2021 &nbsp;///&nbsp; Perseus (right), by John Whitten, Graphite pencil on black paper, 23 x 30 in. 2021</p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_37} alt="" />
          <p>Shine, by Michael Stephen, Altered Kenner Care Bear plush (1983) & light therapy lamp looped on time intervals (18 sec. - ON / 21 min. - OFF) Dimensions variable, 2021 </p>
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_38} alt="" />
          {/* <p>Mooning Nancy, by John Whitten, Katherine Spinella, Jessi DiTillio, & Michael Stephen, HD video & spellcasting salt ingredients, Dimensions variable, 2021</p> */}
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_39} alt="" />
          {/* <p>Mooning Nancy, by John Whitten, Katherine Spinella, Jessi DiTillio, & Michael Stephen, HD video & spellcasting salt ingredients, Dimensions variable, 2021</p> */}
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_40} alt="" />
          {/* <p>Mooning Nancy, by John Whitten, Katherine Spinella, Jessi DiTillio, & Michael Stephen, HD video & spellcasting salt ingredients, Dimensions variable, 2021</p> */}
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_41} alt="" />
          {/* <p>Mooning Nancy, by John Whitten, Katherine Spinella, Jessi DiTillio, & Michael Stephen, HD video & spellcasting salt ingredients, Dimensions variable, 2021</p> */}
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_42} alt="" />
          {/* <p>Mooning Nancy, by John Whitten, Katherine Spinella, Jessi DiTillio, & Michael Stephen, HD video & spellcasting salt ingredients, Dimensions variable, 2021</p> */}
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_43} alt="" />
          {/* <p>Mooning Nancy, by John Whitten, Katherine Spinella, Jessi DiTillio, & Michael Stephen, HD video & spellcasting salt ingredients, Dimensions variable, 2021</p> */}
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_44} alt="" />
          {/* <p>Mooning Nancy, by John Whitten, Katherine Spinella, Jessi DiTillio, & Michael Stephen, HD video & spellcasting salt ingredients, Dimensions variable, 2021</p> */}
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_45} alt="" />
          {/* <p>Mooning Nancy, by John Whitten, Katherine Spinella, Jessi DiTillio, & Michael Stephen, HD video & spellcasting salt ingredients, Dimensions variable, 2021</p> */}
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_46} alt="" />
          {/* <p>Mooning Nancy, by John Whitten, Katherine Spinella, Jessi DiTillio, & Michael Stephen, HD video & spellcasting salt ingredients, Dimensions variable, 2021</p> */}
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_47} alt="" />
          {/* <p>Mooning Nancy, by John Whitten, Katherine Spinella, Jessi DiTillio, & Michael Stephen, HD video & spellcasting salt ingredients, Dimensions variable, 2021</p> */}
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_48} alt="" />
          {/* <p>Mooning Nancy, by John Whitten, Katherine Spinella, Jessi DiTillio, & Michael Stephen, HD video & spellcasting salt ingredients, Dimensions variable, 2021</p> */}
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_49} alt="" />
          {/* <p>Mooning Nancy, by John Whitten, Katherine Spinella, Jessi DiTillio, & Michael Stephen, HD video & spellcasting salt ingredients, Dimensions variable, 2021</p> */}
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_50} alt="" />
          {/* <p>Mooning Nancy, by John Whitten, Katherine Spinella, Jessi DiTillio, & Michael Stephen, HD video & spellcasting salt ingredients, Dimensions variable, 2021</p> */}
        </SwiperSlide>
        <SwiperSlide className={classes.swiperSlide}>
          <img src={ts2_51} alt="" />
          {/* <p>Mooning Nancy, by John Whitten, Katherine Spinella, Jessi DiTillio, & Michael Stephen, HD video & spellcasting salt ingredients, Dimensions variable, 2021</p> */}
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
