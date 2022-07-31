import React from "react";
// import { Link } from 'react-router-dom';
import classes from './Press.module.css'
import parc from './../img/press/parc.png'
import oaw from './../img/press/oaw.png'


function PressIndexPage({ Press }) {

  return ( 
          
    <>
    <div className={classes.Press}>
      <div className={classes.PressIndex}>
      <h2 className={classes.Header}>reviews and interviews</h2>
        <div className={classes.Container}>
          <div className={classes.Row}>
          <div className={classes.Column}>
            <a target='_blank' href="https://www.orartswatch.org/facing-the-sun-tunnels/" >
                <div className={classes.Text}>
                  <h2>Oregon ArtsWatch Review</h2>
                </div>
                <img className={classes.PressCover} src={oaw} alt="me"></img>
            </a>
            <a target='_blank' href="https://www.parccollective.com/conversations/thunderstruck-collective" >
                <div className={classes.Text}>
                  <h2>Parc Collective Interview</h2>
                </div>
              <img className={classes.PressCover} src={parc} alt="me"></img>
            </a>  
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}

export default PressIndexPage;