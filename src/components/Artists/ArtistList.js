import React from "react";
import PropTypes from 'prop-types'
import Artist from './Artist'
import classes from './Artist.module.css'
  
const ArtistList = (props) => {
  return (
    <React.Fragment>
      <h1 className="headingFont" style={{color: "black"}}>Currently On Tap</h1>
      <hr />
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
      
      {props.artstList.map((artist) => 
        <div className={classes.ArtistList}>
          <div id="card" className="card shadow-lg h-100 text-left" >
            <br/>
            <Artist
              whenArtistClicked = {props.onArtistSelection}
              name={artist.name}
              location={artist.location}
              role={artist.role}
              website={artist.website}
              instagram={artist.instagram}
              id={artist.id}
              key={artist.id}/>
          </div>
        </div>
        )}
      </div>
    </React.Fragment>
  );
}

ArtistList.propTypes = {
  artstList: PropTypes.array,
  onArtistSelection: PropTypes.func
};
  
export default ArtistList;