import React from 'react';
import NewArtistForm from './NewArtistForm';
import ArtistList from './ArtistList';
import ArtistDetail from './ArtistDetail';


class ViewControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainArtistList: [],
      selectedTicket: null
    };
  }

  handleClick = () => {
    if (this.state.selectedArtist != null) {
      this.setState({
        formVisible: false,
        selectedArtist: null,
      });
    }
    else {
    this.setState(prevState => ({
    formVisible: !prevState.formVisible,

    }));
  }
}

handleAddingNewArtistToList = (newArtist) => {
  const newMainArtistList = this.state.mainArtistList.concat(newArtist);
  this.setState({
    mainArtistList: newMainArtistList,
    formVisible: false 
  });
}

handleChangingSelectedArtist = (id) => {
  const selectedArtist = this.state.mainArtistList.filter(artist => artist.id === id)[0];
  this.setState({selectedArtist: selectedArtist});
}


  render(){
  
    let currentlyVisibleState = null;
    let buttonText= null;

    if (this.state.selectedTicket != null) {
      currentlyVisibleState = <ArtistDetail artist = {this.state.selectedArtist} />
    }
     else if (this.state.formVisible) {
      currentlyVisibleState = <NewArtistForm onNewArtistCreation={this.handleAddingNewArtistToList} />
      buttonText="Return to Artists";
    } 
    else {
      currentlyVisibleState = <ArtistList 
      artistList={this.state.mainArtistList}
      onArtistSelection={this.handleChangingSelectedArtist} />;

      buttonText="Add Artist"
    }
    return(
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  );

}
}
export default ViewControl;