import React from "react";
import classes from './Artists.module.css'
import PropTypes from 'prop-types'
// import { data } from './data';

function Artist(props) {
  return (
    <>
      <div className={classes.Artist}>
        <div className={classes.Container}>
          <div onClick= {() => props.whenArtistClicked(props.id)}>
            <h1>{props.name}</h1>
            <h3>{props.location}</h3>
            <p><em>{props.role}</em></p>
            {/* <hr id="cardhr" />
            <p>website: <em>{props.website}%</em></p>
            <p>instagram: <em>{props.instagram}</em></p> */}
            {/* <p>image: <em><strong>${props.price}</strong></em></p> */}
            {/* <hr id="cardhrlow" /> */}
            {props.image}
          </div>
        </div>
      </div>
    </>
  );
};

Artist.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  role: PropTypes.string,
  website: PropTypes.string,
  instagram: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
  whenArtistClicked: PropTypes.func,
  // whenSellClicked: PropTypes.func,
  // whenRestockCicked: PropTypes.func
}
  
export default Artist;