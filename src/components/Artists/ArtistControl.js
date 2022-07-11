import React from 'react';
// import { v4 } from 'uuid';
import ArtistList from './ArtistList';
import ArtistDetail from './ArtistDetail';
import ArtistData from './data';

class ArtistControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainArtistList: ArtistData,
      selectedArtist: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedArtist != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedArtist: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage 
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
    // if (this.state.editing) {
    //   currentlyVisibleState = <EditArtistForm artist = {this.state.selectedArtist} onEditArtist = {this.handleEditingArtistInList}/>
    //   buttonText = "Return to Tap List";
    // } else if(this.state.selectedArtist != null) {
    //   currentlyVisibleState = <ArtistDetail 
    //     artist={this.state.selectedArtist}
    //     onClickingDecrease={this.handleDecreasingArtistStock}
    //     onClickingIncrease={this.handleIncreasingArtistStock}
    //     onClickingDelete={this.handleDeletingArtist}
    //     onClickingEdit={this.handleEditClick} />
      buttonText= "Return to Artist List";
    // } else if (this.state.formVisibleOnPage) {
    //   currentlyVisibleState = <NewArtistForm onNewArtistCreation={this.handleAddingNewArtistToList}/>
    //   buttonText = "Return to Tap List";
    // } else {
    //   currentlyVisibleState = <ArtistList artistList={this.state.mainArtistList} onArtistSelection = {this.handleChangingSelectedArtist}/>
    //   buttonText = "Add Artist";
    }

    return(
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
}
  


export default ArtistControl;