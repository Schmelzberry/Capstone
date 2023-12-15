import React from 'react';
import NewArtistForm from './NewArtistForm';
import ArtistList from './ArtistList';
import ArtistDetail from './ArtistDetail';
import EditArtistForm from './EditArtistForm';


class ViewControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainArtistList: [],
      selectedArtist: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedArtist != null) {
      this.setState({
        formVisible: false,
        selectedArtist: null,
        editing: false 
      });
    } else {
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

handleDeletingArtist = (id) => {
  const newMainArtistList = this.state.mainArtistList.filter(artist => artist.id !== id);
  this.setState({
    mainArtistList: newMainArtistList,
    selectedArtist: null
  });
}

handleEditClick = () => {
  console.log("handleEditClick reached!");
  this.setState({editing: true});
}

handleEditingArtistInList = (artistToEdit) => {
  const editedMainArtistList = this.state.mainArtistList
    .filter(artist => artist.id !== this.state.selectedArtist.id)
    .concat(artistToEdit);
  this.setState({
      mainArtistList: editedMainArtistList,
      editing: false,
      selectedArtist: null
    });
}


  render(){
  
    let currentlyVisibleState = null;
    let buttonText= null;

    if (this.state.editing ) {      
      currentlyVisibleState = <EditArtistForm 
      artist = {this.state.selectedArtist}
      onEditArtist = {this.handleEditingArtistInList} />
      buttonText = "Return to Artist List";
    }

    else if (this.state.selectedArtist != null) {
      currentlyVisibleState = <ArtistDetail
      artist = {this.state.selectedArtist}
      onClickingDelete = {this.handleDeletingArtist}
      onClickingEdit = {this.handleEditClick}
       />
      buttonText = "Return to Artist List"
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