import React from "react";
import { Link } from 'react-router-dom';
import classes from './Exhibitions.module.css'
import ts1 from './../img/exhibitions/ts1/ts1_06.jpg'
import ts2 from './../img/exhibitions/ts2/ts2_36.jpg'

function ExhibitionsIndexPage({ exhibitions }) {

  return ( 
          
    <>
    <div className={classes.Exhibitions}>
      <div className={classes.Index}>
        <div className={classes.Container}>
          <div className={classes.Row}>
          <Link to="/exhibitions/ts1">
            <div className={classes.blockColLeft}>
              <div className={classes.Text}>
                <h2>Thunderstruck: 1.0</h2>
              </div>
              <img className={classes.CrueOne} src={ts1} alt="me"></img>
            </div>
          </Link>
          <Link to="/exhibitions/ts2">
            <div className={classes.blockColRight}>
              <div className={classes.Text}>
                <h2>Thunderstruck 2.0: <em>black hole sun</em></h2>
              </div>
            <img className={classes.CrueTwo} src={ts2} alt="me"></img>
            </div>
          </Link>  
          </div>
        </div>
      </div>
    </div>
    </>

  );
}

export default ExhibitionsIndexPage;