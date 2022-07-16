import React from "react";
// import { Link } from 'react-router-dom';
import classes from './Trips.module.css'

import TripOne from './TripOne';
import TripTwo from './TripTwo';

const Trips = () => {


  // const handleClick = () => {
  //   console.log('hello john')
  // }

  return ( 
          
    <>
    <div className={classes.Trips}>
    <div className={classes.Container}>
      <div className={classes.Row}>
      <TripOne />
      <TripTwo />
      </div>
    </div>
    </div>
    </>

  );
}

export default Trips;