import React from "react";
import { Link } from 'react-router-dom';
import classes from './Book.module.css'
// import { BrowserRouter as Router, Route, Routes }
//     from 'react-router-dom';
// import TripOne from './TripOne';
// import TripTwo from './TripTwo';
import book from './../img/book/Book-01.jpg'
import zineOne from './../img/zineOne/zineOne_01.jpg'
import zineTwo from './../img/zineTwo/zineTwo_01.jpg'
import zineThree from './../img/zineThree/zineThree_01.jpg'
import zineFour from './../img/zineFour/zineFour_01.jpg'
import zineFive from './../img/zineFive/zineFive_01.jpg'
import zineSix from './../img/zineSix/zineSix_01.jpg'

// const Trips = () => {


  // const handleClick = () => {
  //   console.log('hello john')
  // }

function BooksIndexPage({ books }) {

  return ( 
          
    <>
    <div className={classes.Books}>
    <div className={classes.BooksIndex}>
      <h2 className={classes.Header}>browse our publications</h2>
        <div className={classes.Container}>
          <div className={classes.Row}>
          <div className={classes.Column}>
            <Link to="/books/book">
                <img className={classes.BookCover} src={book} alt="me"></img>
            </Link>
            <Link to="/books/zine1">
              <img className={classes.BookCover} src={zineOne} alt="me"></img>
            </Link>  
            <Link to="/books/zine2">
              <img className={classes.BookCover} src={zineTwo} alt="me"></img>
            </Link>  
            <Link to="/books/zine3">
              <img className={classes.BookCover} src={zineThree} alt="me"></img>
            </Link>  
            <Link to="/books/zine4">
              <img className={classes.BookCover} src={zineFour} alt="me"></img>
            </Link>  
            <Link to="/books/zine5">
              <img className={classes.BookCover} src={zineFive} alt="me"></img>
            </Link>  
            <Link to="/books/zine6">
              <img className={classes.BookCover} src={zineSix} alt="me"></img>
            </Link>  
            </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default BooksIndexPage;