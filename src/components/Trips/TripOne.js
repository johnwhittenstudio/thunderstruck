import React from "react";
import classes from './Trips.module.css'
import tlfcrue from './../img/trips/tlt_crue.jpg'

const TripOne = () => {
  return ( 
    <div className={classes.Trips}>
      <div className={classes.Container}>
        <div className={classes.blockColLeft}>
          <div className={classes.Text}>
            <h2>New Mexico (2018 - 2019)</h2>
          </div>
        <img className={classes.CrueOne} src={tlfcrue} alt="me"></img>
        </div>
      </div>
    </div>
   );
}
 
export default TripOne;