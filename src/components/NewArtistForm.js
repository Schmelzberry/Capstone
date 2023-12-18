import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid'; 
import ReusableArtistForm from "./ReusableArtistForm";
function NewArtistForm(props){

  function handleNewArtistFormSubmission(event) {
    event.preventDefault();
    props.onNewArtistCreation({
      name: event.target.name.value,
      city: event.target.city.value,
      artistStyle: event.target.artistStyle.value,
      id: v4()
    });
  }
  return(
    <React.Fragment>
      <h2 class="heading">Add New Artist Below</h2>
        <ReusableArtistForm
        formSubmissionHandler={handleNewArtistFormSubmission}
        buttonText="Add Me!" />
    </React.Fragment>
  )
}

NewArtistForm.propTypes = {
  onNewArtistCreation: PropTypes.func
};

export default NewArtistForm;