import React from "react";
import PropTypes from 'prop-types'
import classes from './Artist.module.css'

const Artists = (props) => {
  return ( 
    <div className={classes.Artists}>
    <React.Fragment>
      <div onClick= {() => props.whenArtistClicked(props.id)}>
        <h2>{props.name}</h2>
        <h3>{props.location}</h3>
        <p>{props.role}</p>
        <hr id="cardhr" />
        <p>{props.website}</p>
        <p>{props.instagram}</p>
      </div>
    </React.Fragment>
    </div>
  );
}

Artists.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenArtistClicked: PropTypes.func,
}

export default Artists;