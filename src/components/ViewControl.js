import React, { useEffect, useState } from 'react';
import NewArtistForm from './NewArtistForm';
import ArtistList from './ArtistList';
import ArtistDetail from './ArtistDetail';
import EditArtistForm from './EditArtistForm';
import HeroPage from './Hero.js'
import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc } from "firebase/firestore";
import { db, auth } from './../firebase.js';
import { Link } from "react-router-dom";


function ViewControl() {

const [formVisible, setFormVisible] = useState(false);
const [mainArtistList, setMainArtistList] = useState([]);
const [selectedArtist, setSelectedArtist] = useState(null);
const [editing, setEditing] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
const unSubscribe = onSnapshot(
  collection(db, "artists"),
  (collectionSnapshot) => {
    const artists = [];
    collectionSnapshot.forEach((doc) => {
        artists.push({
          ...doc.data(), 
          id: doc.id
        });
    });
    setMainArtistList(artists);
  },
  (error) => {
    setError(error.message);
  }
);
return () => unSubscribe();
}, []);




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

const handleDeletingArtist = async (id) => {
  await deleteDoc(doc(db,"artists", id));
  setSelectedArtist(null);
}

const handleEditClick = () => {
  setEditing(true);
}

const handleEditingArtistInList = async (artistToEdit) => {
  const artistRef = doc(db, "artists", artistToEdit.id);
  await updateDoc(artistRef, artistToEdit);
  setEditing(false);
  setSelectedArtist(null);
}

// AUTHORIZATION //
 
if (auth.currentUser == null) {
  return (
      <HeroPage />
  )
} else if (auth.currentUser != null) {

    let currentlyVisibleState = null;
    let buttonText= null;
    
    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>
    }
    
    else if (editing) {      
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

      buttonText="Add New Artist"
      
    }
    return(
      <React.Fragment>
      {currentlyVisibleState}
      {!error && <button className="add-artist-button" onClick={handleClick}>{buttonText}</button>}
    </React.Fragment>
  );
  
}
}

export default ViewControl;