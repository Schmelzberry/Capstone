import React from 'react';
import NewArtistForm from './NewArtistForm';
import ArtistList from './ArtistList';


class ViewControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainArtistList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
    formVisible: !prevState.formVisible
  }));
}

handleAddingNewArtistToList = (newArtist) => {
  const newMainArtistList = this.state.mainArtistList.concat(newArtist);
  this.setState({mainArtistList: newMainArtistList,
                formVisible: false });
}


  render(){
  
    let currentlyVisibleState = null;
    let buttonText= null;

    if (this.state.formVisible) {
      currentlyVisibleState = <NewArtistForm onNewArtistCreation={this.handleAddingNewArtistToList} />
      buttonText="Return to Artists"
    } 
    else {
      currentlyVisibleState = <ArtistList 
      artistList={this.state.mainArtistList} />
      buttonText="Add Artist"
    }
    return(
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  );

}
}
export default ViewControl;