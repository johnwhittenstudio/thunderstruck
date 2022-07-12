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

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}> 
      {/* <h1>Page Header</h1> */}
      <p>{props.children}</p>
      {/* <p>Page number: {props.number}</p> */}
    </div>
  );
});

const Book = (props) => {
  return (
    <div className={classes.Book}>
      <div className={classes.Container}>
        <HTMLFlipBook 
          width={300} 
          height={500} 
          // minWidth={300}
          showCover={true} 
          // size={"fixed"} 
          maxShadowOpacity={0} 
          // autoSize={"true"}
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
        </HTMLFlipBook>
      </div>
    </div>
  );
};
  
export default Book;