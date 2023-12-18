import React, { useState } from 'react';
import NewArtistForm from './NewArtistForm';
import ArtistList from './ArtistList';
import ArtistDetail from './ArtistDetail';
import EditArtistForm from './EditArtistForm';
import { collection, addDoc } from "firebase/firestore";
import db from './../firebase.js';


function ViewControl() {

const [formVisible, setFormVisible] = useState(false);
const [mainArtistList, setMainArtistList] = useState([]);
const [selectedArtist, setSelectedArtist] = useState(null);
const [editing, setEditing] = useState(false);


  const handleClick = () => {
    if (selectedArtist != null) {
     
        setFormVisible(false);
       
        setSelectedArtist(null);
        setEditing(false);
    } else {
      setFormVisible(!formVisible);
    }
  }

  const handleAddingNewArtistToList = 
  async (newArtistData) => {
    const collectionRef = collection(db, "artists");
  await addDoc(collectionRef, newArtistData);
      setFormVisible(false);
}

const handleChangingSelectedArtist = (id) => {
  const selection = mainArtistList.filter(artist => artist.id === id)[0];
  setSelectedArtist(selection);
}

const handleDeletingArtist = (id) => {
  const newMainArtistList = mainArtistList.filter(artist => artist.id !== id);
  setMainArtistList(newMainArtistList);
  setSelectedArtist(null);
}

const handleEditClick = () => {
  setEditing(true);
}

const handleEditingArtistInList = (artistToEdit) => {

  const editedMainArtistList = mainArtistList

    .filter(artist => artist.id !== selectedArtist.id)
    .concat(artistToEdit);
    setMainArtistList(editedMainArtistList);
  setEditing(false);
  setSelectedArtist(null);
}


 
  
    let currentlyVisibleState = null;
    let buttonText= null;

    if (editing ) {      
      currentlyVisibleState = 
      <EditArtistForm 
      artist = {selectedArtist}
      onEditArtist = {handleEditingArtistInList} />
      buttonText = "Return to Artist List";
    }

    else if (selectedArtist != null) {
      currentlyVisibleState = 
      <ArtistDetail
      artist = {selectedArtist}
      onClickingDelete = {handleDeletingArtist}
      onClickingEdit = {handleEditClick}
       />
      buttonText = "Return to Artist List"
    }
     else if (formVisible) {
      currentlyVisibleState = <NewArtistForm onNewArtistCreation={handleAddingNewArtistToList} />
      buttonText="Return to Artists";
    } 
    else {
      currentlyVisibleState = <ArtistList 
      artistList={mainArtistList}
      onArtistSelection={handleChangingSelectedArtist} />;

      buttonText="Add Artist"
    }
    return(
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );

}

export default ViewControl;