import React from "react";
import classes from './Book.module.css'
import HTMLFlipBook from "react-pageflip";
import frontCover from './../img/zineFour/zineFour_01.jpg'
import page02 from './../img/zineFour/zineFour_02.jpg'
import page03 from './../img/zineFour/zineFour_03.jpg'
import page04 from './../img/zineFour/zineFour_04.jpg'
import page05 from './../img/zineFour/zineFour_05.jpg'
import page06 from './../img/zineFour/zineFour_06.jpg'
import page07 from './../img/zineFour/zineFour_07.jpg'
import page08 from './../img/zineFour/zineFour_08.jpg'
import page09 from './../img/zineFour/zineFour_09.jpg'
import page10 from './../img/zineFour/zineFour_10.jpg'
import page11 from './../img/zineFour/zineFour_11.jpg'
import page12 from './../img/zineFour/zineFour_12.jpg'


const Page = React.forwardRef((props, ref) => {
  return (
    <div className={classes.demoPage} ref={ref}> 
      {/* <h1>Page Header</h1> */}
      <p>{props.children}</p>
      {/* <p>Page number: {props.number}</p> */}
    </div>
  );
});

const ZineFour = (props) => {
  return (
    <div className={classes.Book}>
      {/* <h2 className={classes.Header}>browse our publications</h2> */}
      <div className={classes.Container}>
        <HTMLFlipBook 
          width={450} 
          height={900} 
          drawShadow={"true"}
          // minWidth={300}
          showCover={true} 
          // size={"stretch"} 
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
    </div>
  );
};
  
export default ZineFour;