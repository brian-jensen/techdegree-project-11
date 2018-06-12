import React, {Component} from 'react';

import apiKey from '../config';
import axios from 'axios';
import PhotosList from './PhotosList';

class PhotoContainer extends Component {
  // Sets default state for photos and loading values.
  state = {
    photos: [],
    loading: true
  }

  componentDidMount = () => {
    // Updates the browsers url route to match the users intial search text
    this.performSearch(this.props.match.params.text);
    // Listens for updated search text to change route after /search/ to match the users text search
    this.props.history.listen(location => this.performSearch(location.pathname.slice(8)));
  }
  // Accepts users search text as parameter. Gives default search value of kittens to the text parameter
  performSearch = (text = 'kittens') => {
    // Fetches flickr API data 
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${text}&per_page=16&sort=relevance&content_type=1&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        loading: false
     });
  })
  .catch(error => {
    // Displays custom message and fetch error details in console if the flickr API fetch is unsuccessful.
    console.log('Error fetching Flickr API data', error);
  });    
}
  // Displays flickr animated logo while waiting for the flickr API to fetch the response data
  // Passes parsed photos object to the PhotosList component once the flickr API is finished fecthing the response data
  render() {
    return (
      <main> 
        {this.state.loading ? <img className="loading" src={require("../images/flickr.svg")} alt="" /> : <PhotosList data={this.state.photos} />}
      </main>
    );
  }
}

export default PhotoContainer;
