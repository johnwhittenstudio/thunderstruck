import React from "react";
import classes from './Book.module.css'
import HTMLFlipBook from "react-pageflip";
import frontCover from './../img/Info-Map/Info_Map.jpg'
import page02 from './../img/Info-Map/Info_Map2.jpg'
import page03 from './../img/Info-Map/Info_Map3.jpg'
import page04 from './../img/Info-Map/Info_Map4.jpg'
import page05 from './../img/Info-Map/Info_Map5.jpg'
import page06 from './../img/Info-Map/Info_Map6.jpg'
import page07 from './../img/Info-Map/Info_Map7.jpg'
import page08 from './../img/Info-Map/Info_Map8.jpg'
import page09 from './../img/Info-Map/Info_Map9.jpg'
import page10 from './../img/Info-Map/Info_Map10.jpg'
import page11 from './../img/Info-Map/Info_Map11.jpg'
import page12 from './../img/Info-Map/Info_Map12.jpg'


const Page = React.forwardRef((props, ref) => {
  return (
    <div className={classes.demoPage} ref={ref}> 
      <p>{props.children}</p>
    </div>
  );
});

const InfoMap = (props) => {
  return (
    <div className={classes.Book}>
      <div className={classes.Container}>
        <HTMLFlipBook 
          width={450} 
          height={900} 
          drawShadow={"true"}
          showCover={true} 
          maxShadowOpacity={0} 
          autoSize={"true"}
          >
          <Page number="1" ><img src={frontCover} alt=""/></Page>
          <Page number="2"><img src={page02} alt=""/></Page>
          <Page number="3"><img src={page03} alt=""/></Page>
          <Page number="4"><img src={page04} alt=""/></Page>
          <Page number="5"><img src={page05} alt=""/></Page>
          <Page number="6"><img src={page06} alt=""/></Page>
          <Page number="7"><img src={page07} alt=""/></Page>
          <Page number="8"><img src={page08} alt=""/></Page>
          <Page number="9"><img src={page09} alt=""/></Page>
          <Page number="10"><img src={page10} alt=""/></Page>
          <Page number="11"><img src={page11} alt=""/></Page>
          <Page number="12"><img src={page12} alt=""/></Page>
          
        </HTMLFlipBook>
      </div>
      <div className={classes.BookText}>
          <p>Gallery map for the Thunderstruck 2.0: black hole sun exhibition at Carnation Contemporary in Portland, OR September 2021</p>
      </div>
    </div>
  );
};
  
export default InfoMap;