import React from "react";
import { Link } from 'react-router-dom';
import classes from './Trips.module.css'
// import { BrowserRouter as Router, Route, Routes }
//     from 'react-router-dom';
// import TripOne from './TripOne';
// import TripTwo from './TripTwo';
import tlfcrue from './../img/trips/tlt_crue.jpg'
import tstcrue from './../img/trips/tst_crue.jpg'

// const Trips = () => {


  // const handleClick = () => {
  //   console.log('hello john')
  // }

function TripsIndexPage({ trips }) {

  return ( 
          
    <>
    <div className={classes.Trips}>
      <div className={classes.TripsIndex}>
      <h2 className={classes.Header}>explore our trips</h2>
        <div className={classes.Container}>
          <div className={classes.Row}>
          <div className={classes.Column}>
            <Link to="/trips/tlf">
                <div className={classes.Text}>
                  <h2>New Mexico (2018 - 2019)</h2>
                </div>
                <img className={classes.TripsCover} src={tlfcrue} alt="me"></img>
            </Link>
            <Link to="/trips/tst">
                <div className={classes.Text}>
                  <h2>Utah (2020 - 2021)</h2>
                </div>
              <img className={classes.TripsCover} src={tstcrue} alt="me"></img>
            </Link>  
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}

export default TripsIndexPage;