import React from "react";
import PropTypes from "prop-types";


function ArtistDetail(props) {

  // destructure artist object so its props can be displayed
  const { artist } = props;

  return (
    <React.Fragment>
      <h1>{artist.name} Info</h1>
      <h3>{artist.city}</h3>
      <h3>{artist.style}</h3>
      < hr />
    </React.Fragment>
  );
}

ArtistDetail.propTypes = {
  artist: PropTypes.object
};

export default ArtistDetail;