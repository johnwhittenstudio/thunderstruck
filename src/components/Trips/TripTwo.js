import React from "react";
import classes from './Trips.module.css'
import tstcrue from './../img/trips/tst_crue.jpg'

const TripTwo = () => {
  return ( 
    <div className={classes.Trips}>
      <div className={classes.Container}>
      <div className={classes.blockColRight}>
        <div className={classes.Text}>
          <h2>Utah (2020 - 2021)</h2>
        </div>
        <img className={classes.CrueTwo} src={tstcrue} alt="me"></img>
        </div>
      </div>
    </div>
   );
}
 
export default TripTwo;