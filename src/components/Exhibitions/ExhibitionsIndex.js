import React from "react";
import { Link } from 'react-router-dom';
import classes from './Exhibitions.module.css'
import ts1 from './../img/exhibitions/ts1/ts1_06.jpg'
import ts2 from './../img/exhibitions/ts2/ts2_08.jpg'

function ExhibitionsIndexPage({ exhibitions }) {

  return (
    <>
    <div className={classes.Exhibitions}>
      <div className={classes.ExhibitionsIndex}>
        <h2 className={classes.Header}>view our exhibitions</h2>
          <div className={classes.Container}>
            <div className={classes.Row}>
              <div className={classes.Column}>
              <Link to="/exhibitions/ts1">
                    <div className={classes.Text}>
                      <h2>Thunderstruck: 1.0</h2>
                    </div>
                    <img className={classes.ExhibitionsCover} src={ts1} alt="me"></img>
              </Link>
              <Link to="/exhibitions/ts2">
                    <div className={classes.Text}>
                      <h2>Thunderstruck 2.0: <em>black hole sun</em></h2>
                    </div>
                    <img className={classes.ExhibitionsCover} src={ts2} alt="me"></img>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default ExhibitionsIndexPage;