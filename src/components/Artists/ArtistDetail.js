import React from 'react'
import PropTypes from 'prop-types'
import classes from './Artists.module.css'

function ArtistDetail(props) {
  const { artist } = props;
  return ( 
    <React.Fragment>
    <div className={classes.ArtistDetail}>
      <div className={classes.Card} >
        <div className={classes.CardBody}>
          <div className={classes.Row}>
            <h2><strong>{artist.name}</strong></h2>
          </div>
          <h3><strong>{artist.location}</strong></h3>
          <h5><em>{artist.role}</em></h5>
          <hr />
          <p><em>{artist.website}</em></p>
          <p><em>{artist.instagram}</em></p>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

ArtistDetail.propTypes = {
  artist: PropTypes.object,
}

export default ArtistDetail;