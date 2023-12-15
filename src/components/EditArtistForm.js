import React from "react";
import ReusableArtistForm from "./ReusableArtistForm";
import PropTypes from "prop-types";


function EditArtistForm(props) {

  const { artist } = props;

  function handleEditArtistFormSubmission(event) {
    event.preventDefault();
    props.onEditArtist({
      name: event.target.name.value,
      city: event.target.city.value, 
      artistStyle: event.target.artistStyle.value, 
      id: artist.id
    });
  }

  return (
    <React.Fragment>
      <ReusableArtistForm
      formSubmissionHandler={handleEditArtistFormSubmission}
        buttonText="Update Artist"
      />
    </React.Fragment>
  );
}

EditArtistForm.propTypes = {
  artist: PropTypes.object,
  onEditArtist: PropTypes.func
};

export default EditArtistForm;
