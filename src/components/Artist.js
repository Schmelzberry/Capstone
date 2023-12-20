import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Artist(props){


  return(

    <React.Fragment>
        <div onClick = {() => props.whenArtistClicked(props.id)}>

          <h2>{props.name}'s Details</h2>
          <p><em>{props.city}</em></p>
          <p><em>{props.artistStyle}</em></p>
          <p>Available: {props.available ? "Yes" : "No"}</p>
          <Link to={`/album/`}>View Album</Link>
        </div>
    </React.Fragment>
  )
}

Artist.propTypes = {
  name: PropTypes.string,
  city: PropTypes.string,
  artistStyle: PropTypes.string,
  id: PropTypes.string,
  available: PropTypes.bool,
  whenArtistClicked: PropTypes.func,

};

export default Artist;