import React from "react";
import PropTypes from "prop-types";


function ArtistDetail(props) {

  // destructure artist object so its props can be displayed
  const { artist, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>{artist.name} Info</h1>
      <h3>{artist.city}</h3>
      <h3>{artist.style}</h3>
      <button onClick={() => onClickingDelete(artist.id) }>Delete Artist</button>
      < hr />
    </React.Fragment>
  );
}

ArtistDetail.propTypes = {
  artist: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default ArtistDetail;