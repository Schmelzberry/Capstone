import React from "react";

function NewArtistForm(){

  function handleNewArtistFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.city.value);
    console.log(event.target.style.value);
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
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  )
}

export default NewArtistForm;