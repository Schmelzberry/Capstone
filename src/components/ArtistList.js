import React from "react";
import Artist from "./Artist";
import PropTypes from "prop-types";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function ArtistAccordion({ artist, onArtistSelection }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-${artist.id}-content`}
        id={`panel-${artist.id}-header`}
      >
        <Typography>{artist.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Artist
          whenArtistClicked={onArtistSelection}
          name={artist.name}
          city={artist.city}
          artistStyle={artist.artistStyle}
          id={artist.id}
        />
      </AccordionDetails>
    </Accordion>
  );
}

function ArtistList({ artistList, onArtistSelection }) {
  return (
    <div style={{ width: '75%', margin: '0 auto' }}> {/* Set the width to 50% */}
      <React.Fragment>
      <h2 className="heading">Artist List</h2>
      
        
        <p className="heading">Take a look at local tattoo artists below. Each individual has a unique approach, style, and price. Spend some time checking out local artists below to see if someone is available who can deliver the design you're looking for! </p>
      

        {artistList.map((artist) => (
          <ArtistAccordion
            key={artist.id}
            artist={artist}
            onArtistSelection={onArtistSelection}
          />
        ))}
      </React.Fragment>
    </div>
  );
}

ArtistList.propTypes = {
  artistList: PropTypes.array,
  onArtistSelection: PropTypes.func,
};

export default ArtistList;


// import React from "react";
// import Artist from "./Artist";
// import PropTypes from "prop-types";

// function ArtistList(props) {
//   return(
//     <React.Fragment>
//       <h2 className="heading">Artist List</h2>
//       <p className="heading">Take a look at local tattoo artists below. Each individual has a unique approach, style, and price. Spend some time checking out local artists below to see if someone is available who can deliver the design you're looking for! </p>
//       <hr/>
      
//       {props.artistList.map((artist) =>


//       <Artist
//       whenArtistClicked = { props.onArtistSelection }

//       name={artist.name}
//       city={artist.city}
//       artistStyle={artist.artistStyle}
//       id={artist.id}
//       key={artist.id}
//       />
//       )}
//     </React.Fragment>
//   );
// }

// ArtistList.propTypes = {
//   artistList: PropTypes.array,
//   onArtistSelection: PropTypes.func
// };

// export default ArtistList;