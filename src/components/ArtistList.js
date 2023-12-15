import React from "react";
import Artist from "./Artist";
import PropTypes from "prop-types";
function ArtistList(props) {
  return(
    <React.Fragment>
      < hr/>
      {props.artistList.map((artist) =>

      <Artist
      whenArtistClicked = { props.onArtistSelection }

      name={artist.name}
      city={artist.city}
      style={artist.style}
      id={artist.id}
      key={artist.id}
      />
      )}
    </React.Fragment>
  );
}

ArtistList.propTypes = {
  artistList: PropTypes.array,
  onArtistSelection: PropTypes.func
};

export default ArtistList;