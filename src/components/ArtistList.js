import React from "react";
import Artist from "./Artist";
import PropTypes from "prop-types";
function ArtistList(props) {
  return(
    <React.Fragment>
      < hr/>
      {props.artistList.map((artist, index) =>

      <Artist 
      name={artist.name}
      city={artist.city}
      style={artist.style}
      key={index}
      />
      )}
    </React.Fragment>
  );
}

ArtistList.propTypes = {
  artistList: PropTypes.array
};

export default ArtistList;