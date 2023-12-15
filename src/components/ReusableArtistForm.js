import React from "react";
import PropTypes from "prop-types";

function ReusableArtistForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Artist Name' />
        <input
          type='text'
          name='city'
          placeholder='City working in' />
        <textarea
          name='Style'
          placeholder='Describe your style.' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableArtistForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableArtistForm;
