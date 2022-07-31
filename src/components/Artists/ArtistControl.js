import React from 'react';
// import { v4 } from 'uuid';
import ArtistList from './ArtistList';
import ArtistDetail from './ArtistDetail';
import ArtistData from './ArtistData';
import classes from './Artists.module.css'

class ArtistControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainArtistList: ArtistData,
      selectedArtist: null,
    };
  }
  
  handleClick = () => {
    if (this.state.selectedArtist != null) {
      this.setState({
        selectedArtist: null,
      });
    } else {
      this.setState(prevState => ({
      }));
    } 
  }

  handleChangingSelectedArtist = (id) => {
    const selectedArtist =this.state.mainArtistList.filter(artist => artist.id === id)[0];
    this.setState({selectedArtist: selectedArtist});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedArtist != null) {
      console.log('currently visible state + selected artist: ' + currentlyVisibleState + this.state.selectedArtist);
      currentlyVisibleState = <ArtistDetail 
        artist={this.state.selectedArtist}/>
      buttonText = "Return to Artist List";
    } else {
      currentlyVisibleState = <ArtistList artistList={this.state.mainArtistList} onArtistSelection = {this.handleChangingSelectedArtist}/>
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button className={classes.Button} onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ArtistControl;