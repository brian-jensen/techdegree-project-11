import React, {Component} from 'react';

class Home extends Component {    
  // Renders landing page text
  render() {
    return (
      <div className="home">
        <h1>Brian's Flickr React Gallery</h1>
        <img className="flickr-logo" src={require("../images/flickr.svg")} alt=""/>
        <p>Search above for images on Flickr!</p>
      </div>
    );
  }
}

export default Home;