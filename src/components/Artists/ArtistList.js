import React from 'react';
import Artist from './Artist';
import PropTypes from 'prop-types'
import classes from './Artists.module.css'

function ArtistList(props) {
  return (
    <React.Fragment>
      <div className={classes.Artist}>
      <h2 className={classes.Header}>meet the crüe</h2>
      <div className={classes.Row}>
      
      {props.artistList.map((artist) => 
        <div className={classes.Column}>
          <div className={classes.Row}>
            <div className={classes.Card} >
            <Artist
              whenArtistClicked = {props.onArtistSelection}
              name={artist.name}
              location={artist.location}
              role={artist.role}
              website={artist.website}
              instagram={artist.instagram}
              id={artist.id}
              key={artist.id}
              />
            </div>
          </div>
        </div>
        )}
      </div>
      </div>
    </React.Fragment>
  );
}

ArtistList.propTypes = {
  artistList: PropTypes.array,
  onArtistSelection: PropTypes.func
};

export default ArtistList