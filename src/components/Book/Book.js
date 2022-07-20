import React from "react";
import classes from './Book.module.css'
import HTMLFlipBook from "react-pageflip";
import frontCover from './../img/book/Book-01.jpg'
import page02 from './../img/book/Book-02.jpg'
import page03 from './../img/book/Book-03.jpg'
import page04 from './../img/book/Book-04.jpg'
import page05 from './../img/book/Book-05.jpg'
import page06 from './../img/book/Book-06.jpg'
import page07 from './../img/book/Book-07.jpg'
import page08 from './../img/book/Book-08.jpg'
import page09 from './../img/book/Book-09.jpg'
import page10 from './../img/book/Book-10.jpg'
import page11 from './../img/book/Book-11.jpg'
import page12 from './../img/book/Book-12.jpg'
import page13 from './../img/book/Book-13.jpg'
import page14 from './../img/book/Book-14.jpg'
import page15 from './../img/book/Book-15.jpg'
import page16 from './../img/book/Book-16.jpg'
import page17 from './../img/book/Book-17.jpg'
import page18 from './../img/book/Book-18.jpg'
import page19 from './../img/book/Book-19.jpg'
import page20 from './../img/book/Book-20.jpg'
import page21 from './../img/book/Book-21.jpg'
import page22 from './../img/book/Book-22.jpg'
import page23 from './../img/book/Book-23.jpg'
import page24 from './../img/book/Book-24.jpg'
import page25 from './../img/book/Book-25.jpg'
import page26 from './../img/book/Book-26.jpg'
import page27 from './../img/book/Book-27.jpg'
import page28 from './../img/book/Book-28.jpg'
import page29 from './../img/book/Book-29.jpg'
import page30 from './../img/book/Book-30.jpg'
import page31 from './../img/book/Book-31.jpg'
import page32 from './../img/book/Book-32.jpg'
import page33 from './../img/book/Book-33.jpg'
import page34 from './../img/book/Book-34.jpg'
import page35 from './../img/book/Book-35.jpg'
import page36 from './../img/book/Book-36.jpg'
import page37 from './../img/book/Book-37.jpg'
import page38 from './../img/book/Book-38.jpg'
import page39 from './../img/book/Book-39.jpg'
import page40 from './../img/book/Book-40.jpg'
import page41 from './../img/book/Book-41.jpg'
import page42 from './../img/book/Book-42.jpg'
import page43 from './../img/book/Book-43.jpg'
import page44 from './../img/book/Book-44.jpg'

const Page = React.forwardRef((props, ref) => {
  return (
    <div className={classes.demoPage} ref={ref}> 
      {/* <h1>Page Header</h1> */}
      <p>{props.children}</p>
      {/* <p>Page number: {props.number}</p> */}
    </div>
  );
});

const Book = (props) => {
  return (
    <div className={classes.Book}>
      <h2 className={classes.Header}>view our publications</h2>
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
          <Page number="13"><img src={page13} alt=""/></Page>
          <Page number="14"><img src={page14} alt=""/></Page>
          <Page number="15"><img src={page15} alt=""/></Page>
          <Page number="16"><img src={page16} alt=""/></Page>
          <Page number="17"><img src={page17} alt=""/></Page>
          <Page number="18"><img src={page18} alt=""/></Page>
          <Page number="19"><img src={page19} alt=""/></Page>
          <Page number="20"><img src={page20} alt=""/></Page>
          <Page number="21"><img src={page21} alt=""/></Page>
          <Page number="22"><img src={page22} alt=""/></Page>
          <Page number="23"><img src={page23} alt=""/></Page>
          <Page number="24"><img src={page24} alt=""/></Page>
          <Page number="25"><img src={page25} alt=""/></Page>
          <Page number="26"><img src={page26} alt=""/></Page>
          <Page number="27"><img src={page27} alt=""/></Page>
          <Page number="28"><img src={page28} alt=""/></Page>
          <Page number="29"><img src={page29} alt=""/></Page>
          <Page number="30"><img src={page30} alt=""/></Page>
          <Page number="31"><img src={page31} alt=""/></Page>
          <Page number="32"><img src={page32} alt=""/></Page>
          <Page number="33"><img src={page33} alt=""/></Page>
          <Page number="34"><img src={page34} alt=""/></Page>
          <Page number="35"><img src={page35} alt=""/></Page>
          <Page number="36"><img src={page36} alt=""/></Page>
          <Page number="37"><img src={page37} alt=""/></Page>
          <Page number="38"><img src={page38} alt=""/></Page>
          <Page number="39"><img src={page39} alt=""/></Page>
          <Page number="40"><img src={page40} alt=""/></Page>
          <Page number="41"><img src={page41} alt=""/></Page>
          <Page number="42"><img src={page42} alt=""/></Page>
          <Page number="43"><img src={page43} alt=""/></Page>
          <Page number="44"><img src={page44} alt=""/></Page>
        </HTMLFlipBook>
      </div>
    </div>
  );
};
  
export default Book;