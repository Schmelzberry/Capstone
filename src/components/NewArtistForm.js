import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid'; 

function NewArtistForm(props){

  function handleNewArtistFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      name: event.target.name.value,
      city: event.target.city.value,
      style: event.target.style.value,
      id: v4()
    });
  }
  return(
    <React.Fragment>
       <form onSubmit={handleNewArtistFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='First/Last name' />
        <input
          type='text'
          name='city'
          placeholder='city working in' />
        <textarea
          name='style'
          placeholder='Describe artist style.' />
        <button type='submit'>New Artist</button>
      </form>
    </React.Fragment>
  )
}

NewArtistForm.propTypes = {
  onNewArtistCreation: PropTypes.func
};

export default NewArtistForm;