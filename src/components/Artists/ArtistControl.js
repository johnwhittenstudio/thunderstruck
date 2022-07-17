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
      // formVisibleOnPage: false,
      mainArtistList: ArtistData,
      selectedArtist: null,
      // editing: false
    };
  }
  
  handleClick = () => {
    if (this.state.selectedArtist != null) {
      this.setState({
        // formVisibleOnPage: false,
        selectedArtist: null,
        // editing: false
      });
    } else {
      this.setState(prevState => ({
        
        // formVisibleOnPage: !prevState.formVisibleOnPage 
      }));
    } 
  }

  // handleAddingNewArtistToList = (newArtist) => {
  //   const newMainArtistList = this.state.mainArtistList.concat(newArtist);
  //   this.setState({
  //     mainArtistList: newMainArtistList,
  //     formVisibleOnPage: false
  //   });
  // }

  handleChangingSelectedArtist = (id) => {
    const selectedArtist =this.state.mainArtistList.filter(artist => artist.id === id)[0];
    this.setState({selectedArtist: selectedArtist});
  }

  // handleDeletingArtist = (id) => {
  //   const newMainArtistList = this.state.mainArtistList.filter(artist => artist.id !== id);
  //   this.setState({
  //     mainArtistList: newMainArtistList,
  //     selectedArtist: null
  //   });
  // }

  // handleEditClick = () => {
  //   this.setState({editing:true});
  // }

  // handleEditingArtistInList = (artistToEdit) => {
  //   const editedMainArtistList = this.state.mainArtistList
  //     .filter(artist => artist.id !== this.state.selectedArtist.id)
  //     .concat(artistToEdit);
  //   this.setState({
  //     mainArtistList: editedMainArtistList,
  //     editing: false,
  //     selectedArtist: null
  //   });
  // }


  render() {
    // console.log("Main artist list: " + this.state.mainArtistList)
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedArtist != null) {
      console.log('currently visible state + selected artist: ' + currentlyVisibleState + this.state.selectedArtist);
      currentlyVisibleState = <ArtistDetail 
        artist={this.state.selectedArtist}/>
      buttonText = "Return to Artist List";
      

    // } else if (this.state.formVisibleOnPage) {
    //   currentlyVisibleState = <NewArtistForm onNewArtistCreation={this.handleAddingNewArtistToList}/>
    //   buttonText = "Return to Artist List";
    } else {
      // console.log('currently visible state + selected artist: ' + currentlyVisibleState + this.state.selectedArtist);
      currentlyVisibleState = <ArtistList artistList={this.state.mainArtistList} onArtistSelection = {this.handleChangingSelectedArtist}/>
      // buttonText = "Add Artist";
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