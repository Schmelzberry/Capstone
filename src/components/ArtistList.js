import React from "react";
import Artist from "./Artist";
import PropTypes from "prop-types";

function ArtistList(props) {
  return(
    <React.Fragment>
      <h2 className="heading">Artist List</h2>
      <p className="heading">Take a look at local tattoo artists below. Each individual has a unique approach, style, and price. Spend some time checking out local artists below to see if someone is available who can deliver the design you're looking for! </p>
      <hr/>
      
      {props.artistList.map((artist) =>


      <Artist
      whenArtistClicked = { props.onArtistSelection }

      name={artist.name}
      city={artist.city}
      artistStyle={artist.artistStyle}
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