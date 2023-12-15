import React from "react";
import PropTypes from "prop-types";

function Artist(props){


  return(

    <React.Fragment>
        <div onClick = {() => props.whenArtistClicked(props.id)}>

          <h2>{props.name} 's Details</h2>
          <p><em>{props.city}</em></p>
          <p><em>{props.artistStyle}</em></p>
          <hr />
        </div>
    </React.Fragment>
  )
}

Artist.propTypes = {
  name: PropTypes.string,
  city: PropTypes.string,
  artistStyle: PropTypes.string,
  id: PropTypes.string,
  whenArtistClicked: PropTypes.func,

};

export default Artist;