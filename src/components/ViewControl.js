import React from 'react';
import NewArtistForm from './NewArtistForm';
import ArtistList from './ArtistList';


class ViewControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
    formVisible: !prevState.formVisible
  }));
}


  render(){
  
    let currentlyVisibleState = null;
    let buttonText= null;

    if (this.state.formVisible) {
      currentlyVisibleState = <NewArtistForm />
      buttonText="Return to Artists"
    } 
    else {
      currentlyVisibleState = <ArtistList />
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