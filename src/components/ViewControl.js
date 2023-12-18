import React, { useState } from 'react';
import NewArtistForm from './NewArtistForm';
import ArtistList from './ArtistList';
import ArtistDetail from './ArtistDetail';
import EditArtistForm from './EditArtistForm';


function ViewControl() {

const [formVisible, setFormVisible] = useState(false);
const [mainArtistList, setMainArtistList] = useState([]);

  const handleClick = () => {
    if (this.state.selectedArtist != null) {
     
        setFormVisible(false);
        this.setState({
          formVisible: false,
          selectedArtist: null,
        });
        
    } else {
      setFormVisible(!formVisible);
    }
  }

  const handleAddingNewArtistToList = (newArtist) => {
  const newMainArtistList = this.state.mainArtistList.concat(newArtist);
  this.setState({mainArtistList: newMainArtistList});
  
  setFormVisible(false)
}

const handleChangingSelectedArtist = (id) => {
  const selectedArtist = this.state.mainArtistList.filter(artist => artist.id === id)[0];
  this.setState({selectedArtist: selectedArtist});
}

const handleDeletingArtist = (id) => {
  const newMainArtistList = this.state.mainArtistList.filter(artist => artist.id !== id);
  this.setState({
    mainArtistList: newMainArtistList,
    selectedArtist: null
  });
}

const handleEditClick = () => {
  console.log("handleEditClick reached!");
  this.setState({editing: true});
}

const handleEditingArtistinList = (artistToEdit) => {
  const editedMainArtistList = this.state.mainArtistList
    .filter(artist => artist.id !== this.state.selectedArtist.id)
    .concat(artistToEdit);
  this.setState({
      mainArtistList: editedMainArtistList,
      editing: false,
      selectedArtist: null
    });
}


 
  
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
     else if (formVisible) {
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

export default ViewControl;